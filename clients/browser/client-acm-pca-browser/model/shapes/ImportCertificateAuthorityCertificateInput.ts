import { Structure as _Structure_ } from "@aws-sdk/types";

export const ImportCertificateAuthorityCertificateInput: _Structure_ = {
  type: "structure",
  required: ["CertificateAuthorityArn", "Certificate"],
  members: {
    CertificateAuthorityArn: {
      shape: {
        type: "string",
        min: 5
      }
    },
    Certificate: {
      shape: {
        type: "blob"
      }
    },
    CertificateChain: {
      shape: {
        type: "blob"
      }
    }
  }
};
