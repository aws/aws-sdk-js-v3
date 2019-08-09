import { _PatchOrchestratorFilterList } from "./_PatchOrchestratorFilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribePatchBaselinesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filters: {
      shape: _PatchOrchestratorFilterList
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
