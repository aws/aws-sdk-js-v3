import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ConfigStreamDeliveryInfo: _Structure_ = {
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
    lastStatusChangeTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
