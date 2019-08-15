import { Structure as _Structure_ } from "@aws-sdk/types";

export const TestInvokeAuthorizerInput: _Structure_ = {
  type: "structure",
  required: ["authorizerName", "token", "tokenSignature"],
  members: {
    authorizerName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "authorizerName"
    },
    token: {
      shape: {
        type: "string",
        min: 1
      }
    },
    tokenSignature: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
