import { Structure as _Structure_ } from "@aws-sdk/types";

export const _IotEventsAction: _Structure_ = {
  type: "structure",
  required: ["inputName", "roleArn"],
  members: {
    inputName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    messageId: {
      shape: {
        type: "string"
      }
    },
    roleArn: {
      shape: {
        type: "string"
      }
    }
  }
};
