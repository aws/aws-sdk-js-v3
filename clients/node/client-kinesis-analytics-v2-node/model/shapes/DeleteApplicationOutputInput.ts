import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteApplicationOutputInput: _Structure_ = {
  type: "structure",
  required: ["ApplicationName", "CurrentApplicationVersionId", "OutputId"],
  members: {
    ApplicationName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CurrentApplicationVersionId: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    OutputId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
