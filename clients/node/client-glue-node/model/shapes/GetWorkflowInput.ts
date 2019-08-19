import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetWorkflowInput: _Structure_ = {
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
    }
  }
};
