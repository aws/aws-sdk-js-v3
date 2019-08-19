import { _InstanceGroupIdsList } from "./_InstanceGroupIdsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AddInstanceGroupsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    JobFlowId: {
      shape: {
        type: "string"
      }
    },
    InstanceGroupIds: {
      shape: _InstanceGroupIdsList
    }
  }
};
