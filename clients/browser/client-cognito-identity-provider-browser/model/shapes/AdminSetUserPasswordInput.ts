import { Structure as _Structure_ } from "@aws-sdk/types";

export const AdminSetUserPasswordInput: _Structure_ = {
  type: "structure",
  required: ["UserPoolId", "Username", "Password"],
  members: {
    UserPoolId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Username: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    },
    Password: {
      shape: {
        type: "string",
        sensitive: true,
        min: 6
      }
    },
    Permanent: {
      shape: {
        type: "boolean"
      }
    }
  }
};
