import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutSubscriptionFilterInput: _Structure_ = {
  type: "structure",
  required: ["logGroupName", "filterName", "filterPattern", "destinationArn"],
  members: {
    logGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    filterName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    filterPattern: {
      shape: {
        type: "string"
      }
    },
    destinationArn: {
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
    distribution: {
      shape: {
        type: "string"
      }
    }
  }
};
