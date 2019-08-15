import { _ApprovalThresholdPolicy } from "./_ApprovalThresholdPolicy";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VotingPolicy: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ApprovalThresholdPolicy: {
      shape: _ApprovalThresholdPolicy
    }
  }
};
