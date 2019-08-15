import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateBatchPredictionInput: _Structure_ = {
  type: "structure",
  required: [
    "BatchPredictionId",
    "MLModelId",
    "BatchPredictionDataSourceId",
    "OutputUri"
  ],
  members: {
    BatchPredictionId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    BatchPredictionName: {
      shape: {
        type: "string"
      }
    },
    MLModelId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    BatchPredictionDataSourceId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    OutputUri: {
      shape: {
        type: "string"
      }
    }
  }
};
