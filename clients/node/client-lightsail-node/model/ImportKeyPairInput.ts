import { Structure as _Structure_ } from "@aws-sdk/types";

export const ImportKeyPairInput: _Structure_ = {
  type: "structure",
  required: ["keyPairName", "publicKeyBase64"],
  members: {
    keyPairName: {
      shape: {
        type: "string"
      }
    },
    publicKeyBase64: {
      shape: {
        type: "string"
      }
    }
  }
};
