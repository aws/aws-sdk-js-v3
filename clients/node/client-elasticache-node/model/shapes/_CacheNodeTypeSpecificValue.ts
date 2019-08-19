import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CacheNodeTypeSpecificValue: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CacheNodeType: {
      shape: {
        type: "string"
      }
    },
    Value: {
      shape: {
        type: "string"
      }
    }
  }
};
