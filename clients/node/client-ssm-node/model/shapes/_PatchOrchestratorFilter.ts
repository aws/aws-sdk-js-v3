import { _PatchOrchestratorFilterValues } from "./_PatchOrchestratorFilterValues";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PatchOrchestratorFilter: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Key: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Values: {
      shape: _PatchOrchestratorFilterValues
    }
  }
};
