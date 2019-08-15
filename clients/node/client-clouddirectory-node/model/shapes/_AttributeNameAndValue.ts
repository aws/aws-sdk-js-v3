import { _TypedAttributeValue } from "./_TypedAttributeValue";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AttributeNameAndValue: _Structure_ = {
  type: "structure",
  required: ["AttributeName", "Value"],
  members: {
    AttributeName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Value: {
      shape: _TypedAttributeValue
    }
  }
};
