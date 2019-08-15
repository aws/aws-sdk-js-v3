import { _ActionTypeId } from "./_ActionTypeId";
import { _QueryParamMap } from "./_QueryParamMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PollForJobsInput: _Structure_ = {
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
    },
    queryParam: {
      shape: _QueryParamMap
    }
  }
};
