import { _PublicKeyMap } from "./_PublicKeyMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AuthorizerDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    authorizerName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    authorizerArn: {
      shape: {
        type: "string"
      }
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
    },
    creationDate: {
      shape: {
        type: "timestamp"
      }
    },
    lastModifiedDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
