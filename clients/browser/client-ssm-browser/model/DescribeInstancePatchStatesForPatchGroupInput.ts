import { _InstancePatchStateFilterList } from "./_InstancePatchStateFilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeInstancePatchStatesForPatchGroupInput: _Structure_ = {
  type: "structure",
  required: ["PatchGroup"],
  members: {
    PatchGroup: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Filters: {
      shape: _InstancePatchStateFilterList
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
