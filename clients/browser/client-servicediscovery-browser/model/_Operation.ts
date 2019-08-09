import { _OperationTargetsMap } from "./_OperationTargetsMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Operation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string"
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    ErrorMessage: {
      shape: {
        type: "string"
      }
    },
    ErrorCode: {
      shape: {
        type: "string"
      }
    },
    CreateDate: {
      shape: {
        type: "timestamp"
      }
    },
    UpdateDate: {
      shape: {
        type: "timestamp"
      }
    },
    Targets: {
      shape: _OperationTargetsMap
    }
  }
};
