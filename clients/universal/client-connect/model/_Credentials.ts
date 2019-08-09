import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Credentials: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AccessToken: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    AccessTokenExpiration: {
      shape: {
        type: "timestamp"
      }
    },
    RefreshToken: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    RefreshTokenExpiration: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
