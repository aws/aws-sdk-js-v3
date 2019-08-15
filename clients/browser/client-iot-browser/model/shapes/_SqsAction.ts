import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SqsAction: _Structure_ = {
  type: "structure",
  required: ["roleArn", "queueUrl"],
  members: {
    roleArn: {
      shape: {
        type: "string"
      }
    },
    queueUrl: {
      shape: {
        type: "string"
      }
    },
    useBase64: {
      shape: {
        type: "boolean"
      }
    }
  }
};
