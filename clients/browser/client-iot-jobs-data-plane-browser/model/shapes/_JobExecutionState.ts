import { _DetailsMap } from "./_DetailsMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _JobExecutionState: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    status: {
      shape: {
        type: "string"
      }
    },
    statusDetails: {
      shape: _DetailsMap
    },
    versionNumber: {
      shape: {
        type: "integer"
      }
    }
  }
};
