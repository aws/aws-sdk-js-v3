import { Structure as _Structure_ } from "@aws-sdk/types";

export const VerifySoftwareTokenInput: _Structure_ = {
  type: "structure",
  required: ["UserCode"],
  members: {
    AccessToken: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    Session: {
      shape: {
        type: "string",
        min: 20
      }
    },
    UserCode: {
      shape: {
        type: "string",
        min: 6
      }
    },
    FriendlyDeviceName: {
      shape: {
        type: "string"
      }
    }
  }
};
