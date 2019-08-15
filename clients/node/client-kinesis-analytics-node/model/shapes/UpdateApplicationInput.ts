import { _ApplicationUpdate } from "./_ApplicationUpdate";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateApplicationInput: _Structure_ = {
  type: "structure",
  required: [
    "ApplicationName",
    "CurrentApplicationVersionId",
    "ApplicationUpdate"
  ],
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
    ApplicationUpdate: {
      shape: _ApplicationUpdate
    }
  }
};
