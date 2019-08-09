import { _Output } from "./_Output";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AddApplicationOutputInput: _Structure_ = {
  type: "structure",
  required: ["ApplicationName", "CurrentApplicationVersionId", "Output"],
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
    Output: {
      shape: _Output
    }
  }
};
