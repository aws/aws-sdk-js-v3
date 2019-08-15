import { _CodeSigningSignature } from "./_CodeSigningSignature";
import { _CodeSigningCertificateChain } from "./_CodeSigningCertificateChain";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CustomCodeSigning: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    signature: {
      shape: _CodeSigningSignature
    },
    certificateChain: {
      shape: _CodeSigningCertificateChain
    },
    hashAlgorithm: {
      shape: {
        type: "string"
      }
    },
    signatureAlgorithm: {
      shape: {
        type: "string"
      }
    }
  }
};
