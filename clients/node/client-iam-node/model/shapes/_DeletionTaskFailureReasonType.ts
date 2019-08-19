import { _RoleUsageListType } from "./_RoleUsageListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DeletionTaskFailureReasonType: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Reason: {
      shape: {
        type: "string"
      }
    },
    RoleUsageList: {
      shape: _RoleUsageListType
    }
  }
};
