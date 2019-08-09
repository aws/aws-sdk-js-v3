import { _InstanceIdList } from "./_InstanceIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeInstancePatchStatesInput: _Structure_ = {
  type: "structure",
  required: ["InstanceIds"],
  members: {
    InstanceIds: {
      shape: _InstanceIdList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 10
      }
    }
  }
};
