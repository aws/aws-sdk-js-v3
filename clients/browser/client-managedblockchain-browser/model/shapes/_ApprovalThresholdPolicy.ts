import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ApprovalThresholdPolicy: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ThresholdPercentage: {
      shape: {
        type: "integer"
      }
    },
    ProposalDurationInHours: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    ThresholdComparator: {
      shape: {
        type: "string"
      }
    }
  }
};
