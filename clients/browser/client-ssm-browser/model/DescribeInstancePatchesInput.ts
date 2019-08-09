import { _PatchOrchestratorFilterList } from "./_PatchOrchestratorFilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeInstancePatchesInput: _Structure_ = {
  type: "structure",
  required: ["InstanceId"],
  members: {
    InstanceId: {
      shape: {
        type: "string"
      }
    },
    Filters: {
      shape: _PatchOrchestratorFilterList
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
