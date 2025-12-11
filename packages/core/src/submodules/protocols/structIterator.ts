import { NormalizedSchema } from "@smithy/core/schema";
import type { StaticStructureSchema } from "@smithy/types";

/**
 * @internal
 */
type SourceObject = Record<string, any>;

/**
 * For serialization use only.
 * @internal
 *
 * @param ns - normalized schema object.
 * @param sourceObject - source object from serialization.
 */
export function* serializingStructIterator(ns: NormalizedSchema, sourceObject: SourceObject) {
  if (ns.isUnitSchema()) {
    return;
  }
  const struct = ns.getSchema() as StaticStructureSchema;
  for (let i = 0; i < struct[4].length; ++i) {
    const key = struct[4][i];
    const memberSchema = struct[5][i];

    const memberNs = new (NormalizedSchema as any)([memberSchema, 0], key);

    if (!(key in sourceObject) && !memberNs.isIdempotencyToken()) {
      continue;
    }

    yield [key, memberNs];
  }
}

/**
 * For deserialization use only.
 * Yields a subset of NormalizedSchema::structIterator matched to the source object keys.
 * This is a performance optimization to avoid creation of NormalizedSchema member
 * objects for members that are undefined in the source data object but may be numerous
 * in the schema/model.
 * @internal
 *
 * @param ns - normalized schema object.
 * @param sourceObject - source object from deserialization.
 * @param nameTrait - xmlName or jsonName trait to look for.
 */
export function* deserializingStructIterator(
  ns: NormalizedSchema,
  sourceObject: SourceObject,
  nameTrait?: "xmlName" | "jsonName" | false
) {
  if (ns.isUnitSchema()) {
    return;
  }
  const struct = ns.getSchema() as StaticStructureSchema;
  let keysRemaining = Object.keys(sourceObject).filter((k) => k !== "__type").length;

  for (let i = 0; i < struct[4].length; ++i) {
    if (keysRemaining === 0) {
      break;
    }
    const key = struct[4][i];
    const memberSchema = struct[5][i];
    const memberNs = new (NormalizedSchema as any)([memberSchema, 0], key);

    let serializationKey = key;

    if (nameTrait) {
      serializationKey = memberNs.getMergedTraits()[nameTrait] ?? key;
    }

    if (!(serializationKey in sourceObject)) {
      continue;
    }

    yield [key, memberNs];
    keysRemaining -= 1;
  }
}
