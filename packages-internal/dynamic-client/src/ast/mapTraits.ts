import type { SchemaTraitsObject } from "@smithy/types";
import { hasOwn } from "@aws-sdk/core/util";

import type { AstTraits } from "./types";

/**
 * Smithy trait shape IDs whose presence maps to a runtime trait key with a
 * unit value (`1`). The runtime only inspects a fixed set of traits when
 * (de)serializing; traits outside this set are irrelevant to the schema
 * runtime and are dropped to keep trait objects small.
 *
 * @internal
 */
const UNIT_TRAITS: Record<string, keyof SchemaTraitsObject> = {
  "smithy.api#idempotent": "idempotent",
  "smithy.api#idempotencyToken": "idempotencyToken",
  "smithy.api#sensitive": "sensitive",
  "smithy.api#sparse": "sparse",
  "smithy.api#httpLabel": "httpLabel",
  "smithy.api#httpQueryParams": "httpQueryParams",
  "smithy.api#httpPayload": "httpPayload",
  "smithy.api#httpResponseCode": "httpResponseCode",
  "smithy.api#xmlAttribute": "xmlAttribute",
  "smithy.api#xmlFlattened": "xmlFlattened",
  "smithy.api#streaming": "streaming",
  "smithy.api#eventHeader": "eventHeader",
  "smithy.api#eventPayload": "eventPayload",
};

/**
 * Smithy trait shape IDs whose string value is copied to a runtime trait key.
 *
 * @internal
 */
const STRING_TRAITS: Record<string, keyof SchemaTraitsObject> = {
  "smithy.api#httpHeader": "httpHeader",
  "smithy.api#httpQuery": "httpQuery",
  "smithy.api#httpPrefixHeaders": "httpPrefixHeaders",
  "smithy.api#xmlName": "xmlName",
  "smithy.api#jsonName": "jsonName",
  "smithy.api#mediaType": "mediaType",
};

/**
 * Converts an AST trait map (keyed by absolute trait shape ID) into the
 * runtime {@link SchemaTraitsObject} form consumed by `@smithy/core` schemas.
 *
 * Only traits that affect runtime (de)serialization are retained. The
 * `timestampFormat` trait is intentionally not translated here: it is encoded
 * as a schema sentinel value instead (see the simple-shape mapping).
 *
 * @param traits - AST trait map, or `undefined`.
 * @returns a runtime trait object, or `0` when no relevant traits are present.
 *
 * @internal
 */
export function mapTraits(traits: AstTraits | undefined): SchemaTraitsObject | 0 {
  if (!traits) {
    return 0;
  }

  let result: SchemaTraitsObject | undefined;

  for (const traitId in traits) {
    if (!hasOwn(traits, traitId)) continue;
    const unitKey = UNIT_TRAITS[traitId];
    if (unitKey !== undefined) {
      (result ??= {})[unitKey] = 1 as never;
      continue;
    }
    const stringKey = STRING_TRAITS[traitId];
    if (stringKey !== undefined) {
      (result ??= {})[stringKey] = traits[traitId] as never;
      continue;
    }
    if (traitId === "smithy.api#error") {
      (result ??= {}).error = traits[traitId] as "client" | "server";
      continue;
    }
    if (traitId === "smithy.api#http") {
      const http = traits[traitId] as { method: string; uri: string; code?: number };
      (result ??= {}).http = [http.method, http.uri, http.code ?? 200];
      continue;
    }
    if (traitId === "smithy.api#endpoint") {
      const endpoint = traits[traitId] as { hostPrefix: string };
      (result ??= {}).endpoint = [endpoint.hostPrefix];
      continue;
    }
  }

  return result ?? 0;
}
