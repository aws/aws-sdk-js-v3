import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ConfigExportDeliveryInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    lastStatus: {
      shape: {
        type: "string"
      }
    },
    lastErrorCode: {
      shape: {
        type: "string"
      }
    },
    lastErrorMessage: {
      shape: {
        type: "string"
      }
    },
    lastAttemptTime: {
      shape: {
        type: "timestamp"
      }
    },
    lastSuccessfulTime: {
      shape: {
        type: "timestamp"
      }
    },
    nextDeliveryTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
