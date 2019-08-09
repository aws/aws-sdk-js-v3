import { _ActionTypeId } from "./_ActionTypeId";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PollForThirdPartyJobsInput: _Structure_ = {
  type: "structure",
  required: ["actionTypeId"],
  members: {
    actionTypeId: {
      shape: _ActionTypeId
    },
    maxBatchSize: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
