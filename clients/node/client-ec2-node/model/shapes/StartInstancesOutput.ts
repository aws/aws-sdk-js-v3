import { _InstanceStateChangeList } from "./_InstanceStateChangeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartInstancesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StartingInstances: {
      shape: _InstanceStateChangeList,
      locationName: "instancesSet"
    }
  }
};
