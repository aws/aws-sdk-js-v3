import { _TypedAttributeValue } from "./_TypedAttributeValue";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TypedAttributeValueRange: _Structure_ = {
  type: "structure",
  required: ["StartMode", "EndMode"],
  members: {
    StartMode: {
      shape: {
        type: "string"
      }
    },
    StartValue: {
      shape: _TypedAttributeValue
    },
    EndMode: {
      shape: {
        type: "string"
      }
    },
    EndValue: {
      shape: _TypedAttributeValue
    }
  }
};
