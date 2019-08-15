import { _StorageTypeLimitList } from "./_StorageTypeLimitList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StorageType: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StorageTypeName: {
      shape: {
        type: "string"
      }
    },
    StorageSubTypeName: {
      shape: {
        type: "string"
      }
    },
    StorageTypeLimits: {
      shape: _StorageTypeLimitList
    }
  }
};
