import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LoggingOptions: _Structure_ = {
  type: "structure",
  required: ["roleArn", "level", "enabled"],
  members: {
    roleArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    level: {
      shape: {
        type: "string"
      }
    },
    enabled: {
      shape: {
        type: "boolean"
      }
    }
  }
};
