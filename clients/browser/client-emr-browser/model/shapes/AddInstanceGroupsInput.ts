import { _InstanceGroupConfigList } from "./_InstanceGroupConfigList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AddInstanceGroupsInput: _Structure_ = {
  type: "structure",
  required: ["InstanceGroups", "JobFlowId"],
  members: {
    InstanceGroups: {
      shape: _InstanceGroupConfigList
    },
    JobFlowId: {
      shape: {
        type: "string"
      }
    }
  }
};
