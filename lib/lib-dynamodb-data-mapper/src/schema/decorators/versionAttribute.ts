import { NumberType } from "../item";
import { attribute } from "./attribute";

export function versionAttribute(parameters: Partial<NumberType> = {}): PropertyDecorator {
  return attribute({
    ...parameters,
    type: "Number",
    versionAttribute: true,
  });
}
