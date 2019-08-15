import { Structure as _Structure_ } from "@aws-sdk/types";

export const _KinesisSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StreamArn: {
      shape: {
        type: "string"
      }
    },
    MessageFormat: {
      shape: {
        type: "string"
      }
    },
    ServiceAccessRoleArn: {
      shape: {
        type: "string"
      }
    }
  }
};
