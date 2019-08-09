import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SubscriptionFilter: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    filterName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    logGroupName: {
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
    },
    creationTime: {
      shape: {
        type: "integer"
      }
    }
  }
};
