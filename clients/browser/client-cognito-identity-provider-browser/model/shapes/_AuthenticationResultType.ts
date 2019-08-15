import { _NewDeviceMetadataType } from "./_NewDeviceMetadataType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AuthenticationResultType: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AccessToken: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    ExpiresIn: {
      shape: {
        type: "integer"
      }
    },
    TokenType: {
      shape: {
        type: "string"
      }
    },
    RefreshToken: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    IdToken: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    NewDeviceMetadata: {
      shape: _NewDeviceMetadataType
    }
  }
};
