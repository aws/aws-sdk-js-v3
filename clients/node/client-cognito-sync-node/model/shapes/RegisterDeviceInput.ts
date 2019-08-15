import { Structure as _Structure_ } from "@aws-sdk/types";

export const RegisterDeviceInput: _Structure_ = {
  type: "structure",
  required: ["IdentityPoolId", "IdentityId", "Platform", "Token"],
  members: {
    IdentityPoolId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "IdentityPoolId"
    },
    IdentityId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "IdentityId"
    },
    Platform: {
      shape: {
        type: "string"
      }
    },
    Token: {
      shape: {
        type: "string"
      }
    }
  }
};
