import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetV2LoggingOptionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    roleArn: {
      shape: {
        type: "string"
      }
    },
    defaultLogLevel: {
      shape: {
        type: "string"
      }
    },
    disableAllLogs: {
      shape: {
        type: "boolean"
      }
    }
  }
};
