import { _PatchOrchestratorFilterList } from "./_PatchOrchestratorFilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribePatchGroupsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    Filters: {
      shape: _PatchOrchestratorFilterList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
