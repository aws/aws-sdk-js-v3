import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AuthorizationData: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    authorizationToken: {
      shape: {
        type: "string"
      }
    },
    expiresAt: {
      shape: {
        type: "timestamp"
      }
    },
    proxyEndpoint: {
      shape: {
        type: "string"
      }
    }
  }
};
