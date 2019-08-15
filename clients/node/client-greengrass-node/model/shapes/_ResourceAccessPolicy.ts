import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResourceAccessPolicy: _Structure_ = {
  type: "structure",
  required: ["ResourceId"],
  members: {
    Permission: {
      shape: {
        type: "string"
      }
    },
    ResourceId: {
      shape: {
        type: "string"
      }
    }
  }
};
