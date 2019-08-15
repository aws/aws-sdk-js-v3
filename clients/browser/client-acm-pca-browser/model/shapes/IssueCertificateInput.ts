import { _Validity } from "./_Validity";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const IssueCertificateInput: _Structure_ = {
  type: "structure",
  required: ["CertificateAuthorityArn", "Csr", "SigningAlgorithm", "Validity"],
  members: {
    CertificateAuthorityArn: {
      shape: {
        type: "string",
        min: 5
      }
    },
    Csr: {
      shape: {
        type: "blob"
      }
    },
    SigningAlgorithm: {
      shape: {
        type: "string"
      }
    },
    TemplateArn: {
      shape: {
        type: "string",
        min: 5
      }
    },
    Validity: {
      shape: _Validity
    },
    IdempotencyToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
