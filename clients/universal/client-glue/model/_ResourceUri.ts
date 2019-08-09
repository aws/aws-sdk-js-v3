import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResourceUri: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ResourceType: {
      shape: {
        type: "string"
      }
    },
    Uri: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
