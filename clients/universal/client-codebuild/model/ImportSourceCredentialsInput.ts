import { Structure as _Structure_ } from "@aws-sdk/types";

export const ImportSourceCredentialsInput: _Structure_ = {
  type: "structure",
  required: ["token", "serverType", "authType"],
  members: {
    username: {
      shape: {
        type: "string",
        min: 1
      }
    },
    token: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    },
    serverType: {
      shape: {
        type: "string"
      }
    },
    authType: {
      shape: {
        type: "string"
      }
    }
  }
};
