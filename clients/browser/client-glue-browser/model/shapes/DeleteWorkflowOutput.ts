import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteWorkflowOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
