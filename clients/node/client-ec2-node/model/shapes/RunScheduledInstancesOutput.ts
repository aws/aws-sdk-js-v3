import { _InstanceIdSet } from "./_InstanceIdSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RunScheduledInstancesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InstanceIdSet: {
      shape: _InstanceIdSet,
      locationName: "instanceIdSet"
    }
  }
};
