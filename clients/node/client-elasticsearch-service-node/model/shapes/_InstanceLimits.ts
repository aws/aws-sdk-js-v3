import { _InstanceCountLimits } from "./_InstanceCountLimits";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceLimits: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InstanceCountLimits: {
      shape: _InstanceCountLimits
    }
  }
};
