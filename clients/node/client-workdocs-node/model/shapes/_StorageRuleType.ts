import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StorageRuleType: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StorageAllocatedInBytes: {
      shape: {
        type: "integer"
      }
    },
    StorageType: {
      shape: {
        type: "string"
      }
    }
  }
};
