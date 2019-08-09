import { _PublicKeyConfig } from "./_PublicKeyConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetPublicKeyConfigOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PublicKeyConfig: {
      shape: _PublicKeyConfig
    },
    ETag: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "ETag"
    }
  },
  payload: "PublicKeyConfig"
};
