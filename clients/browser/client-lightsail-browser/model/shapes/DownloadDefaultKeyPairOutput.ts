import { Structure as _Structure_ } from "@aws-sdk/types";

export const DownloadDefaultKeyPairOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    publicKeyBase64: {
      shape: {
        type: "string"
      }
    },
    privateKeyBase64: {
      shape: {
        type: "string"
      }
    }
  }
};
