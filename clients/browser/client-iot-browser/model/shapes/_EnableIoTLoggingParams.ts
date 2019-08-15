import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EnableIoTLoggingParams: _Structure_ = {
  type: "structure",
  required: ["roleArnForLogging", "logLevel"],
  members: {
    roleArnForLogging: {
      shape: {
        type: "string",
        min: 20
      }
    },
    logLevel: {
      shape: {
        type: "string"
      }
    }
  }
};
