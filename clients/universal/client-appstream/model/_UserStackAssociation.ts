import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UserStackAssociation: _Structure_ = {
  type: "structure",
  required: ["StackName", "UserName", "AuthenticationType"],
  members: {
    StackName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    UserName: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    },
    AuthenticationType: {
      shape: {
        type: "string"
      }
    },
    SendEmailNotification: {
      shape: {
        type: "boolean"
      }
    }
  }
};
