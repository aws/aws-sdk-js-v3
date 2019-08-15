import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TransferData: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    transferMessage: {
      shape: {
        type: "string"
      }
    },
    rejectReason: {
      shape: {
        type: "string"
      }
    },
    transferDate: {
      shape: {
        type: "timestamp"
      }
    },
    acceptDate: {
      shape: {
        type: "timestamp"
      }
    },
    rejectDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
