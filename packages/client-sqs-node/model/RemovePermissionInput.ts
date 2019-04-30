import { Structure as _Structure_ } from "@aws-sdk/types";

export const RemovePermissionInput: _Structure_ = {
  type: "structure",
  required: ["QueueUrl", "Label"],
  members: {
    QueueUrl: {
      shape: {
        type: "string"
      }
    },
    Label: {
      shape: {
        type: "string"
      }
    }
  }
};
