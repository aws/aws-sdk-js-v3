import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListStackSetOperationResultsInput: _Structure_ = {
  type: "structure",
  required: ["StackSetName", "OperationId"],
  members: {
    StackSetName: {
      shape: {
        type: "string"
      }
    },
    OperationId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
