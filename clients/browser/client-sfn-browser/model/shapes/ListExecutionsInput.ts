import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListExecutionsInput: _Structure_ = {
  type: "structure",
  required: ["stateMachineArn"],
  members: {
    stateMachineArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    statusFilter: {
      shape: {
        type: "string"
      }
    },
    maxResults: {
      shape: {
        type: "integer"
      }
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
