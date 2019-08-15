import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ExecutionConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    jobTimeoutMinutes: {
      shape: {
        type: "integer"
      }
    },
    accountsCleanup: {
      shape: {
        type: "boolean"
      }
    },
    appPackagesCleanup: {
      shape: {
        type: "boolean"
      }
    },
    videoCapture: {
      shape: {
        type: "boolean"
      }
    },
    skipAppResign: {
      shape: {
        type: "boolean"
      }
    }
  }
};
