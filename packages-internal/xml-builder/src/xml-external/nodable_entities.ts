/**
 * Contains code from \@nodable/entities v2.1.0
 * Copyright (c) Amit Gupta (https://solothought.com)
 * https://github.com/nodable/val-parsers
 *
 * This file bundles the EntityDecoder class and the named-entity maps
 * (XML, COMMON_HTML, CURRENCY).
 *
 * This is a temporary solution while using this particular custom
 * EntityDecoder class. The module-only nature of the original version
 * is incompatible with some of our users' applications.
 *
 * Given that our CJS dist must call `require` to bring in the module, and
 * because the EntityDecoder class and object are inaccessible via the runtime object surface
 * of the XMLParser, we must inline the package.
 *
 * Q: Why is this necessary given that fast-xml-parser itself uses \@nodable/entities?
 * A: FXP only uses \@nodable/entities when imported in ESM mode. When importing FXP
 *    via require, a bundled version is used, unaffected by the module-only nature
 *    of the entities package.
 */

// ---------------------------------------------------------------------------
// Named-entity maps
// ---------------------------------------------------------------------------

export const XML: Record<string, string> = {
  amp: "&",
  apos: "'",
  gt: ">",
  lt: "<",
  quot: '"',
};

export const COMMON_HTML: Record<string, string> = {
  nbsp: "\u00a0",
  copy: "\u00a9",
  reg: "\u00ae",
  trade: "\u2122",
  mdash: "\u2014",
  ndash: "\u2013",
  hellip: "\u2026",
  laquo: "\u00ab",
  raquo: "\u00bb",
  lsquo: "\u2018",
  rsquo: "\u2019",
  ldquo: "\u201c",
  rdquo: "\u201d",
  bull: "\u2022",
  para: "\u00b6",
  sect: "\u00a7",
  deg: "\u00b0",
  frac12: "\u00bd",
  frac14: "\u00bc",
  frac34: "\u00be",
};

export const CURRENCY: Record<string, string> = {
  cent: "\u00a2",
  pound: "\u00a3",
  curren: "\u00a4",
  yen: "\u00a5",
  euro: "\u20ac",
  dollar: "$",
  fnof: "\u0192",
  inr: "\u20b9",
  af: "\u060b",
  birr: "\u1265\u122d",
  peso: "\u20b1",
  rub: "\u20bd",
  won: "\u20a9",
  yuan: "\u00a5",
  cedil: "\u00b8",
};

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type EntityValFn = (match: string, captured: string, ...rest: unknown[]) => string;

type ApplyLimitsTo = "external" | "base" | "all" | Array<"external" | "base">;

interface EntityDecoderLimitOptions {
  maxTotalExpansions?: number;
  maxExpandedLength?: number;
  applyLimitsTo?: ApplyLimitsTo;
}

interface EntityDecoderNCROptions {
  xmlVersion?: 1.0 | 1.1;
  onNCR?: "allow" | "leave" | "remove" | "throw";
  nullNCR?: "remove" | "throw";
}

interface EntityDecoderOptions {
  namedEntities?: Record<string, string | { regex: RegExp; val: string | EntityValFn }> | null;
  postCheck?: ((resolved: string, original: string) => string) | null;
  numericAllowed?: boolean;
  leave?: string[];
  remove?: string[];
  limit?: EntityDecoderLimitOptions;
  ncr?: EntityDecoderNCROptions;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const SPECIAL_CHARS = new Set("!?\\/[]$%{}^&*()<>|+");

function validateEntityName(name: string): string {
  if (name[0] === "#") {
    throw new Error(`[EntityReplacer] Invalid character '#' in entity name: "${name}"`);
  }
  for (const ch of name) {
    if (SPECIAL_CHARS.has(ch)) {
      throw new Error(`[EntityReplacer] Invalid character '${ch}' in entity name: "${name}"`);
    }
  }
  return name;
}

function mergeEntityMaps(...maps: Array<Record<string, any> | null | undefined>): Record<string, string> {
  const out: Record<string, string> = Object.create(null);
  for (const map of maps) {
    if (!map) {
      continue;
    }
    for (const key of Object.keys(map)) {
      const raw = map[key];
      if (typeof raw === "string") {
        out[key] = raw;
      } else if (raw && typeof raw === "object" && raw.val !== undefined) {
        const val = raw.val;
        if (typeof val === "string") {
          out[key] = val;
        }
      }
    }
  }
  return out;
}

// ---------------------------------------------------------------------------
// Limit-tier constants
// ---------------------------------------------------------------------------

const LIMIT_TIER_EXTERNAL = "external";
const LIMIT_TIER_BASE = "base";
const LIMIT_TIER_ALL = "all";

function parseLimitTiers(raw: string | string[] | undefined): Set<string> {
  if (!raw || raw === LIMIT_TIER_EXTERNAL) {
    return new Set([LIMIT_TIER_EXTERNAL]);
  }
  if (raw === LIMIT_TIER_ALL) {
    return new Set([LIMIT_TIER_ALL]);
  }
  if (raw === LIMIT_TIER_BASE) {
    return new Set([LIMIT_TIER_BASE]);
  }
  if (Array.isArray(raw)) {
    return new Set(raw);
  }
  return new Set([LIMIT_TIER_EXTERNAL]);
}

// ---------------------------------------------------------------------------
// NCR helpers
// ---------------------------------------------------------------------------

const NCR_LEVEL: Record<string, number> = Object.freeze({ allow: 0, leave: 1, remove: 2, throw: 3 });

const XML10_ALLOWED_C0 = new Set([0x09, 0x0a, 0x0d]);

function parseNCRConfig(ncr?: EntityDecoderNCROptions): {
  xmlVersion: number;
  onLevel: number;
  nullLevel: number;
} {
  if (!ncr) {
    return { xmlVersion: 1.0, onLevel: NCR_LEVEL.allow, nullLevel: NCR_LEVEL.remove };
  }
  const xmlVersion = ncr.xmlVersion === 1.1 ? 1.1 : 1.0;
  const onLevel = NCR_LEVEL[ncr.onNCR ?? "allow"] ?? NCR_LEVEL.allow;
  const nullLevel = NCR_LEVEL[ncr.nullNCR ?? "remove"] ?? NCR_LEVEL.remove;
  const clampedNull = Math.max(nullLevel, NCR_LEVEL.remove);
  return { xmlVersion, onLevel, nullLevel: clampedNull };
}

// ---------------------------------------------------------------------------
// EntityDecoder interface & implementation
// ---------------------------------------------------------------------------

export interface EntityDecoder {
  setExternalEntities(map: Record<string, string | { regex: RegExp; val: string | EntityValFn }>): void;
  addExternalEntity(key: string, value: string): void;
  addInputEntities(map: Record<string, string | { regx?: RegExp; regex?: RegExp; val: string | EntityValFn }>): void;
  reset(): this;
  decode(str: string): string;
  setXmlVersion(version: string): void;
}

export const EntityDecoderImpl: new (options?: EntityDecoderOptions) => EntityDecoder = class EntityDecoderImpl
  implements EntityDecoder
{
  private readonly _limit: EntityDecoderLimitOptions;
  private readonly _maxTotalExpansions: number;
  private readonly _maxExpandedLength: number;
  private readonly _postCheck: (resolved: string, original: string) => string;
  private readonly _limitTiers: Set<string>;
  private readonly _numericAllowed: boolean;
  private readonly _baseMap: Record<string, string>;
  private _externalMap: Record<string, string>;
  private _inputMap: Record<string, string>;
  private _totalExpansions: number;
  private _expandedLength: number;
  private readonly _removeSet: Set<string>;
  private readonly _leaveSet: Set<string>;
  private _ncrXmlVersion: number;
  private readonly _ncrOnLevel: number;
  private readonly _ncrNullLevel: number;

  public constructor(options: EntityDecoderOptions = {}) {
    this._limit = options.limit || {};
    this._maxTotalExpansions = this._limit.maxTotalExpansions || 0;
    this._maxExpandedLength = this._limit.maxExpandedLength || 0;
    this._postCheck = typeof options.postCheck === "function" ? options.postCheck : (r) => r;
    this._limitTiers = parseLimitTiers(this._limit.applyLimitsTo ?? LIMIT_TIER_EXTERNAL);
    this._numericAllowed = options.numericAllowed ?? true;
    this._baseMap = mergeEntityMaps(XML, options.namedEntities || null);
    this._externalMap = Object.create(null);
    this._inputMap = Object.create(null);
    this._totalExpansions = 0;
    this._expandedLength = 0;
    this._removeSet = new Set(options.remove && Array.isArray(options.remove) ? options.remove : []);
    this._leaveSet = new Set(options.leave && Array.isArray(options.leave) ? options.leave : []);
    const ncrCfg = parseNCRConfig(options.ncr);
    this._ncrXmlVersion = ncrCfg.xmlVersion;
    this._ncrOnLevel = ncrCfg.onLevel;
    this._ncrNullLevel = ncrCfg.nullLevel;
  }

  public setExternalEntities(map: Record<string, string | { regex: RegExp; val: string | EntityValFn }>): void {
    if (map) {
      for (const key of Object.keys(map)) {
        validateEntityName(key);
      }
    }
    this._externalMap = mergeEntityMaps(map);
  }

  public addExternalEntity(key: string, value: string): void {
    validateEntityName(key);
    if (typeof value === "string" && value.indexOf("&") === -1) {
      this._externalMap[key] = value;
    }
  }

  public addInputEntities(
    map: Record<string, string | { regx?: RegExp; regex?: RegExp; val: string | EntityValFn }>
  ): void {
    this._totalExpansions = 0;
    this._expandedLength = 0;
    this._inputMap = mergeEntityMaps(map);
  }

  public reset(): this {
    this._inputMap = Object.create(null);
    this._totalExpansions = 0;
    this._expandedLength = 0;
    return this;
  }

  public setXmlVersion(version: string): void {
    this._ncrXmlVersion = version === "1.1" || (version as any) === 1.1 ? 1.1 : 1.0;
  }

  public decode(str: string): string {
    if (typeof str !== "string" || str.length === 0) {
      return str;
    }

    const original = str;
    const chunks: string[] = [];
    const len = str.length;
    let last = 0;
    let i = 0;

    const limitExpansions = this._maxTotalExpansions > 0;
    const limitLength = this._maxExpandedLength > 0;
    const checkLimits = limitExpansions || limitLength;

    while (i < len) {
      if (str.charCodeAt(i) !== 38 /* & */) {
        i++;
        continue;
      }

      let j = i + 1;
      while (j < len && str.charCodeAt(j) !== 59 /* ; */ && j - i <= 32) {
        j++;
      }

      if (j >= len || str.charCodeAt(j) !== 59) {
        i++;
        continue;
      }

      const token = str.slice(i + 1, j);
      if (token.length === 0) {
        i++;
        continue;
      }

      let replacement: string | undefined;
      let tier: string | undefined;

      if (this._removeSet.has(token)) {
        replacement = "";
        if (tier === undefined) {
          tier = LIMIT_TIER_EXTERNAL;
        }
      } else if (this._leaveSet.has(token)) {
        i++;
        continue;
      } else if (token.charCodeAt(0) === 35 /* # */) {
        const ncrResult = this._resolveNCR(token);
        if (ncrResult === undefined) {
          i++;
          continue;
        }
        replacement = ncrResult;
        tier = LIMIT_TIER_BASE;
      } else {
        const resolved = this._resolveName(token);
        replacement = resolved?.value;
        tier = resolved?.tier;
      }

      if (replacement === undefined) {
        i++;
        continue;
      }

      if (i > last) {
        chunks.push(str.slice(last, i));
      }
      chunks.push(replacement);
      last = j + 1;
      i = last;

      if (checkLimits && this._tierCounts(tier!)) {
        if (limitExpansions) {
          this._totalExpansions++;
          if (this._totalExpansions > this._maxTotalExpansions) {
            throw new Error(
              `[EntityReplacer] Entity expansion count limit exceeded: ` +
                `${this._totalExpansions} > ${this._maxTotalExpansions}`
            );
          }
        }
        if (limitLength) {
          const delta = replacement.length - (token.length + 2);
          if (delta > 0) {
            this._expandedLength += delta;
            if (this._expandedLength > this._maxExpandedLength) {
              throw new Error(
                `[EntityReplacer] Expanded content length limit exceeded: ` +
                  `${this._expandedLength} > ${this._maxExpandedLength}`
              );
            }
          }
        }
      }
    }

    if (last < len) {
      chunks.push(str.slice(last));
    }

    const result = chunks.length === 0 ? str : chunks.join("");
    return this._postCheck(result, original);
  }

  // --- private methods ---

  private _tierCounts(tier: string): boolean {
    if (this._limitTiers.has(LIMIT_TIER_ALL)) {
      return true;
    }
    return this._limitTiers.has(tier);
  }

  private _resolveName(name: string): { value: string; tier: string } | undefined {
    if (name in this._inputMap) {
      return { value: this._inputMap[name], tier: LIMIT_TIER_EXTERNAL };
    }
    if (name in this._externalMap) {
      return { value: this._externalMap[name], tier: LIMIT_TIER_EXTERNAL };
    }
    if (name in this._baseMap) {
      return { value: this._baseMap[name], tier: LIMIT_TIER_BASE };
    }
    return undefined;
  }

  private _classifyNCR(cp: number): number {
    if (cp === 0) {
      return this._ncrNullLevel;
    }
    if (cp >= 0xd800 && cp <= 0xdfff) {
      return NCR_LEVEL.remove;
    }
    if (this._ncrXmlVersion === 1.0) {
      if (cp >= 0x01 && cp <= 0x1f && !XML10_ALLOWED_C0.has(cp)) {
        return NCR_LEVEL.remove;
      }
    }
    return -1;
  }

  private _applyNCRAction(action: number, token: string, cp: number): string | undefined {
    switch (action) {
      case NCR_LEVEL.allow:
        return String.fromCodePoint(cp);
      case NCR_LEVEL.remove:
        return "";
      case NCR_LEVEL.leave:
        return undefined;
      case NCR_LEVEL.throw:
        throw new Error(
          `[EntityDecoder] Prohibited numeric character reference ` +
            `&${token}; (U+${cp.toString(16).toUpperCase().padStart(4, "0")})`
        );
      default:
        return String.fromCodePoint(cp);
    }
  }

  private _resolveNCR(token: string): string | undefined {
    const second = token.charCodeAt(1);
    let cp: number;
    if (second === 120 /* x */ || second === 88 /* X */) {
      cp = parseInt(token.slice(2), 16);
    } else {
      cp = parseInt(token.slice(1), 10);
    }

    if (Number.isNaN(cp) || cp < 0 || cp > 0x10ffff) {
      return undefined;
    }

    const minimum = this._classifyNCR(cp);

    if (!this._numericAllowed && minimum < NCR_LEVEL.remove) {
      return undefined;
    }

    const effective = minimum === -1 ? this._ncrOnLevel : Math.max(this._ncrOnLevel, minimum);

    return this._applyNCRAction(effective, token, cp);
  }
};
