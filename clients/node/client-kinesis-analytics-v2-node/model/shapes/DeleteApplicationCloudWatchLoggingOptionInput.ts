import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteApplicationCloudWatchLoggingOptionInput: _Structure_ = {
  type: "structure",
  required: [
    "ApplicationName",
    "CurrentApplicationVersionId",
    "CloudWatchLoggingOptionId"
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
    CloudWatchLoggingOptionId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
