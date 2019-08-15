import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResourceIdentifier: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ResourceArn: {
      shape: {
        type: "string"
      }
    },
    ResourceType: {
      shape: {
        type: "string"
      }
    }
  }
};
