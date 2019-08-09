import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetWorkflowRunInput: _Structure_ = {
  type: "structure",
  required: ["Name", "RunId"],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RunId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    IncludeGraph: {
      shape: {
        type: "boolean"
      }
    }
  }
};
