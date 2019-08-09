import { _PublicKeyConfig } from "./_PublicKeyConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdatePublicKeyInput: _Structure_ = {
  type: "structure",
  required: ["PublicKeyConfig", "Id"],
  members: {
    PublicKeyConfig: {
      shape: _PublicKeyConfig,
      locationName: "PublicKeyConfig",
      xmlNamespace: {
        uri: "http://cloudfront.amazonaws.com/doc/2019-03-26/"
      }
    },
    Id: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "Id"
    },
    IfMatch: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "If-Match"
    }
  },
  payload: "PublicKeyConfig"
};
