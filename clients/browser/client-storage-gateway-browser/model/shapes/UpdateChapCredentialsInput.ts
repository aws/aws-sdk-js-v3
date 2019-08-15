import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateChapCredentialsInput: _Structure_ = {
  type: "structure",
  required: ["TargetARN", "SecretToAuthenticateInitiator", "InitiatorName"],
  members: {
    TargetARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    SecretToAuthenticateInitiator: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    },
    InitiatorName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SecretToAuthenticateTarget: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    }
  }
};
