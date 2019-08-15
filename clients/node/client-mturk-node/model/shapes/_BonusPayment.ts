import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BonusPayment: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    WorkerId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    BonusAmount: {
      shape: {
        type: "string"
      }
    },
    AssignmentId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Reason: {
      shape: {
        type: "string"
      }
    },
    GrantTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
