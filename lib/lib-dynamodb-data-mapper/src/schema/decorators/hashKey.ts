import { BinaryType, CustomType, DateType, NumberType, StringType } from "../item";
import { attribute } from "./attribute";

export function hashKey(
  parameters: Partial<BinaryType | CustomType<any> | DateType | NumberType | StringType> = {}
): PropertyDecorator {
  return attribute({
    ...parameters,
    keyType: "HASH",
  });
}
