import { _InstancePatchStateList } from "./_InstancePatchStateList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeInstancePatchStatesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InstancePatchStates: {
      shape: _InstancePatchStateList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
