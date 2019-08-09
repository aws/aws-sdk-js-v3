import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DBInstanceRole: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RoleArn: {
      shape: {
        type: "string"
      }
    },
    FeatureName: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    }
  }
};
