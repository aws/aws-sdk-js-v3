import { _UpdateParams } from "./_UpdateParams";
import { _ErrorDetails } from "./_ErrorDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Update: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    id: {
      shape: {
        type: "string"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    type: {
      shape: {
        type: "string"
      }
    },
    params: {
      shape: _UpdateParams
    },
    createdAt: {
      shape: {
        type: "timestamp"
      }
    },
    errors: {
      shape: _ErrorDetails
    }
  }
};
