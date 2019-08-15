import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Attribute: _Structure_ = {
  type: "structure",
  required: ["name"],
  members: {
    name: {
      shape: {
        type: "string"
      }
    },
    value: {
      shape: {
        type: "string"
      }
    },
    targetType: {
      shape: {
        type: "string"
      }
    },
    targetId: {
      shape: {
        type: "string"
      }
    }
  }
};
