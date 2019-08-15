import { _AttributeKey } from "./_AttributeKey";
import { _TypedAttributeValueRange } from "./_TypedAttributeValueRange";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ObjectAttributeRange: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AttributeKey: {
      shape: _AttributeKey
    },
    Range: {
      shape: _TypedAttributeValueRange
    }
  }
};
