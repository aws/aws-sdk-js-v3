import { _StorageRuleType } from "./_StorageRuleType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UserStorageMetadata: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StorageUtilizedInBytes: {
      shape: {
        type: "integer"
      }
    },
    StorageRule: {
      shape: _StorageRuleType
    }
  }
};
