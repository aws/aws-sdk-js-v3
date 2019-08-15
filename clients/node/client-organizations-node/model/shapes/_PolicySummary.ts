import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PolicySummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string"
      }
    },
    Arn: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    AwsManaged: {
      shape: {
        type: "boolean"
      }
    }
  }
};
