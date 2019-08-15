import { _PublicKeyConfig } from "./_PublicKeyConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreatePublicKeyInput: _Structure_ = {
  type: "structure",
  required: ["PublicKeyConfig"],
  members: {
    PublicKeyConfig: {
      shape: _PublicKeyConfig,
      locationName: "PublicKeyConfig",
      xmlNamespace: {
        uri: "http://cloudfront.amazonaws.com/doc/2019-03-26/"
      }
    }
  },
  payload: "PublicKeyConfig"
};
