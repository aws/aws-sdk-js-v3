import { Structure as _Structure_ } from "@aws-sdk/types";

export const SendBonusInput: _Structure_ = {
  type: "structure",
  required: ["WorkerId", "BonusAmount", "AssignmentId", "Reason"],
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
    UniqueRequestToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
