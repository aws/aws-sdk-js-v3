import { _ASN1Subject } from "./_ASN1Subject";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CertificateAuthorityConfiguration: _Structure_ = {
  type: "structure",
  required: ["KeyAlgorithm", "SigningAlgorithm", "Subject"],
  members: {
    KeyAlgorithm: {
      shape: {
        type: "string"
      }
    },
    SigningAlgorithm: {
      shape: {
        type: "string"
      }
    },
    Subject: {
      shape: _ASN1Subject
    }
  }
};
