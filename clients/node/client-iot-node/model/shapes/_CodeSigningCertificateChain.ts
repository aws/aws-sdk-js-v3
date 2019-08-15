import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CodeSigningCertificateChain: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    certificateName: {
      shape: {
        type: "string"
      }
    },
    inlineDocument: {
      shape: {
        type: "string"
      }
    }
  }
};
