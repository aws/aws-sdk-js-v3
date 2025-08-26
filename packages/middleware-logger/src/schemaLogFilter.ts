import { NormalizedSchema } from "@smithy/core/schema";
import type { Schema as ISchema } from "@smithy/types";

const SENSITIVE_STRING = "***SensitiveInformation***";

/**
 * Redacts sensitive parts of any data object using its schema, for logging.
 *
 * @internal
 * @param schema - with filtering traits.
 * @param data - to be logged.
 */
export function schemaLogFilter(schema: ISchema, data: unknown): any {
  if (data == null) {
    return data;
  }
  const ns = NormalizedSchema.of(schema);
  if (ns.getMergedTraits().sensitive) {
    return SENSITIVE_STRING;
  }

  if (ns.isListSchema()) {
    const isSensitive = !!ns.getValueSchema().getMergedTraits().sensitive;
    if (isSensitive) {
      return SENSITIVE_STRING;
    }
  } else if (ns.isMapSchema()) {
    const isSensitive =
      !!ns.getKeySchema().getMergedTraits().sensitive || !!ns.getValueSchema().getMergedTraits().sensitive;
    if (isSensitive) {
      return SENSITIVE_STRING;
    }
  } else if (ns.isStructSchema() && typeof data === "object") {
    const object = data as Record<string, unknown>;

    const newObject = {} as any;
    for (const [member, memberNs] of ns.structIterator()) {
      if (object[member] != null) {
        newObject[member] = schemaLogFilter(memberNs, object[member]);
      }
    }
    return newObject;
  }

  return data;
}
