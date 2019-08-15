import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CreateAccountStatus: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string"
      }
    },
    AccountName: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    },
    State: {
      shape: {
        type: "string"
      }
    },
    RequestedTimestamp: {
      shape: {
        type: "timestamp"
      }
    },
    CompletedTimestamp: {
      shape: {
        type: "timestamp"
      }
    },
    AccountId: {
      shape: {
        type: "string"
      }
    },
    GovCloudAccountId: {
      shape: {
        type: "string"
      }
    },
    FailureReason: {
      shape: {
        type: "string"
      }
    }
  }
};
