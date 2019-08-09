import { _TypedAttributeValue } from "./_TypedAttributeValue";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LinkAttributeAction: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AttributeActionType: {
      shape: {
        type: "string"
      }
    },
    AttributeUpdateValue: {
      shape: _TypedAttributeValue
    }
  }
};
