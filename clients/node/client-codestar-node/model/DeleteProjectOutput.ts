import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteProjectOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    stackId: {
      shape: {
        type: "string"
      }
    },
    projectArn: {
      shape: {
        type: "string"
      }
    }
  }
};
