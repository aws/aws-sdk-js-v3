import { _StorageTypeList } from "./_StorageTypeList";
import { _InstanceLimits } from "./_InstanceLimits";
import { _AdditionalLimitList } from "./_AdditionalLimitList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Limits: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StorageTypes: {
      shape: _StorageTypeList
    },
    InstanceLimits: {
      shape: _InstanceLimits
    },
    AdditionalLimits: {
      shape: _AdditionalLimitList
    }
  }
};
