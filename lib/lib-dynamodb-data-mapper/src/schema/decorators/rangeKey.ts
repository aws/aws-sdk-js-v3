import { BinaryType, CustomType, DateType, NumberType, StringType } from "../item";
import { attribute } from "./attribute";

export function rangeKey(
  parameters: Partial<BinaryType | CustomType<any> | DateType | NumberType | StringType> = {}
): PropertyDecorator {
  return attribute({
    ...parameters,
    keyType: "RANGE",
  });
}
