import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetWorkflowRunsInput: _Structure_ = {
  type: "structure",
  required: ["Name"],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    IncludeGraph: {
      shape: {
        type: "boolean"
      }
    },
    NextToken: {
      shape: {
        type: "string"
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
