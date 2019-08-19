import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetBulkPublishDetailsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    IdentityPoolId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    BulkPublishStartTime: {
      shape: {
        type: "timestamp"
      }
    },
    BulkPublishCompleteTime: {
      shape: {
        type: "timestamp"
      }
    },
    BulkPublishStatus: {
      shape: {
        type: "string"
      }
    },
    FailureMessage: {
      shape: {
        type: "string"
      }
    }
  }
};
