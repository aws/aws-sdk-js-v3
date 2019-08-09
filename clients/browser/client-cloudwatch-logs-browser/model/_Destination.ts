import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Destination: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    destinationName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    targetArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    roleArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    accessPolicy: {
      shape: {
        type: "string",
        min: 1
      }
    },
    arn: {
      shape: {
        type: "string"
      }
    },
    creationTime: {
      shape: {
        type: "integer"
      }
    }
  }
};
