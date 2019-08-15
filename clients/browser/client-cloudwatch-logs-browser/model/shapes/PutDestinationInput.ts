import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutDestinationInput: _Structure_ = {
  type: "structure",
  required: ["destinationName", "targetArn", "roleArn"],
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
    }
  }
};
