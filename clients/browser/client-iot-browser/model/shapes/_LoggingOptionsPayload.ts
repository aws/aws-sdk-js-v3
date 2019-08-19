import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LoggingOptionsPayload: _Structure_ = {
  type: "structure",
  required: ["roleArn"],
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
