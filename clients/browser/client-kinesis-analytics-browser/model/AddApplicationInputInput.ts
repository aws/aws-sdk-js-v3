import { _Input } from "./_Input";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AddApplicationInputInput: _Structure_ = {
  type: "structure",
  required: ["ApplicationName", "CurrentApplicationVersionId", "Input"],
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
    Input: {
      shape: _Input
    }
  }
};
