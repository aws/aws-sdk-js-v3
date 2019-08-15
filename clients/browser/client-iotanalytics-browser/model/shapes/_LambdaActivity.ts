import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LambdaActivity: _Structure_ = {
  type: "structure",
  required: ["name", "lambdaName", "batchSize"],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    lambdaName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    batchSize: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    next: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
