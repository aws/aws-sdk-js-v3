import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateUserInput: _Structure_ = {
  type: "structure",
  required: ["UserName", "AuthenticationType"],
  members: {
    UserName: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    },
    MessageAction: {
      shape: {
        type: "string"
      }
    },
    FirstName: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    LastName: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    AuthenticationType: {
      shape: {
        type: "string"
      }
    }
  }
};
