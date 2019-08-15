import { _CloudWatchLoggingOption } from "./_CloudWatchLoggingOption";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AddApplicationCloudWatchLoggingOptionInput: _Structure_ = {
  type: "structure",
  required: [
    "ApplicationName",
    "CurrentApplicationVersionId",
    "CloudWatchLoggingOption"
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
    CloudWatchLoggingOption: {
      shape: _CloudWatchLoggingOption
    }
  }
};
