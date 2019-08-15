import { _InstanceStateChangeList } from "./_InstanceStateChangeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TerminateInstancesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TerminatingInstances: {
      shape: _InstanceStateChangeList,
      locationName: "instancesSet"
    }
  }
};
