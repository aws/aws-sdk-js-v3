import { _TypedAttributeValueRange } from "./_TypedAttributeValueRange";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TypedLinkAttributeRange: _Structure_ = {
  type: "structure",
  required: ["Range"],
  members: {
    AttributeName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Range: {
      shape: _TypedAttributeValueRange
    }
  }
};
