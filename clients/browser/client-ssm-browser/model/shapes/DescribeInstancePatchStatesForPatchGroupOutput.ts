import { _InstancePatchStatesList } from "./_InstancePatchStatesList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeInstancePatchStatesForPatchGroupOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InstancePatchStates: {
      shape: _InstancePatchStatesList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
