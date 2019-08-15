import { _AttributeKey } from "./_AttributeKey";
import { _TypedAttributeValue } from "./_TypedAttributeValue";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AttributeKeyAndValue: _Structure_ = {
  type: "structure",
  required: ["Key", "Value"],
  members: {
    Key: {
      shape: _AttributeKey
    },
    Value: {
      shape: _TypedAttributeValue
    }
  }
};
