import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LookupAttribute: _Structure_ = {
  type: "structure",
  required: ["AttributeKey", "AttributeValue"],
  members: {
    AttributeKey: {
      shape: {
        type: "string"
      }
    },
    AttributeValue: {
      shape: {
        type: "string"
      }
    }
  }
};
