import { Structure as _Structure_ } from "@aws-sdk/types";

export const ResyncMFADeviceInput: _Structure_ = {
  type: "structure",
  required: [
    "UserName",
    "SerialNumber",
    "AuthenticationCode1",
    "AuthenticationCode2"
  ],
  members: {
    UserName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SerialNumber: {
      shape: {
        type: "string",
        min: 9
      }
    },
    AuthenticationCode1: {
      shape: {
        type: "string",
        min: 6
      }
    },
    AuthenticationCode2: {
      shape: {
        type: "string",
        min: 6
      }
    }
  }
};
