import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AssessmentTarget: _Structure_ = {
  type: "structure",
  required: ["arn", "name", "createdAt", "updatedAt"],
  members: {
    arn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    resourceGroupArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    createdAt: {
      shape: {
        type: "timestamp"
      }
    },
    updatedAt: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
