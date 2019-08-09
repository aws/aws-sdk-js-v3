import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetBatchPredictionInput: _Structure_ = {
  type: "structure",
  required: ["BatchPredictionId"],
  members: {
    BatchPredictionId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
