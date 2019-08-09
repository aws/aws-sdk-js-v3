import { _CacheNodeIdsList } from "./_CacheNodeIdsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CacheParameterGroupStatus: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CacheParameterGroupName: {
      shape: {
        type: "string"
      }
    },
    ParameterApplyStatus: {
      shape: {
        type: "string"
      }
    },
    CacheNodeIdsToReboot: {
      shape: _CacheNodeIdsList
    }
  }
};
