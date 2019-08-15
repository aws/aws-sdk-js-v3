import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateLogSubscriptionInput: _Structure_ = {
  type: "structure",
  required: ["DirectoryId", "LogGroupName"],
  members: {
    DirectoryId: {
      shape: {
        type: "string"
      }
    },
    LogGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
