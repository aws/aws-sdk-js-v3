import { _PathToMapOfMethodSnapshot } from "./_PathToMapOfMethodSnapshot";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Deployment: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    id: {
      shape: {
        type: "string"
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    createdDate: {
      shape: {
        type: "timestamp"
      }
    },
    apiSummary: {
      shape: _PathToMapOfMethodSnapshot
    }
  }
};
