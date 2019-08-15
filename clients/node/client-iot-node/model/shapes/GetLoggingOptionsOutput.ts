import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetLoggingOptionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    roleArn: {
      shape: {
        type: "string"
      }
    },
    logLevel: {
      shape: {
        type: "string"
      }
    }
  }
};
