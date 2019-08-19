import { _PublicKeyMap } from "./_PublicKeyMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateAuthorizerInput: _Structure_ = {
  type: "structure",
  required: ["authorizerName"],
  members: {
    authorizerName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "authorizerName"
    },
    authorizerFunctionArn: {
      shape: {
        type: "string"
      }
    },
    tokenKeyName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    tokenSigningPublicKeys: {
      shape: _PublicKeyMap
    },
    status: {
      shape: {
        type: "string"
      }
    }
  }
};
