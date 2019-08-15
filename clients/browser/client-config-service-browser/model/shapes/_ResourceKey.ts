import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResourceKey: _Structure_ = {
  type: "structure",
  required: ["resourceType", "resourceId"],
  members: {
    resourceType: {
      shape: {
        type: "string"
      }
    },
    resourceId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
