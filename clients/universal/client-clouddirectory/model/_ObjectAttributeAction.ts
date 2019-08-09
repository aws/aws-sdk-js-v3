import { _TypedAttributeValue } from "./_TypedAttributeValue";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ObjectAttributeAction: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ObjectAttributeActionType: {
      shape: {
        type: "string"
      }
    },
    ObjectAttributeUpdateValue: {
      shape: _TypedAttributeValue
    }
  }
};
