import { NormalizedSchema } from "@smithy/core/schema";
import type { Schema } from "@smithy/types";

const REVIVER_SYMBOL = Symbol.for("@aws-sdk/reviver");

/**
 * Determines whether a schema tree contains BigInteger or BigDecimal members,
 * which require a JSON.parse reviver to preserve numeric precision.
 *
 * The result is cached on the root static schema array (struct schemas) via a Symbol key,
 * so subsequent calls for the same schema are O(1).
 *
 * @internal
 */
export function needsReviver(schema: Schema): boolean {
  const ns = NormalizedSchema.of(schema);
  const raw = ns.getSchema();

  // Cache on the static schema array if it's a struct.
  if (Array.isArray(raw) && ns.isStructSchema()) {
    if (REVIVER_SYMBOL in raw) {
      return (raw as any)[REVIVER_SYMBOL];
    }
    const result = _check(ns, new Set());
    (raw as any)[REVIVER_SYMBOL] = result;
    return result;
  }

  // For non-struct or non-array schemas, just compute without caching.
  return _check(ns, new Set());
}

function _check(ns: NormalizedSchema, seen: Set<unknown>): boolean {
  const raw = ns.getSchema();
  if (seen.has(raw)) {
    return false;
  }
  seen.add(raw);

  if (ns.isBigIntegerSchema() || ns.isBigDecimalSchema()) {
    return true;
  }

  if (ns.isStructSchema()) {
    for (const [, memberSchema] of ns.structIterator()) {
      if (_check(memberSchema, seen)) {
        return true;
      }
    }
  } else if (ns.isListSchema() || ns.isMapSchema()) {
    if (_check(ns.getValueSchema(), seen)) {
      return true;
    }
  } else if (ns.isDocumentSchema()) {
    // Documents can contain anything — must assume reviver is needed.
    return true;
  }

  return false;
}
