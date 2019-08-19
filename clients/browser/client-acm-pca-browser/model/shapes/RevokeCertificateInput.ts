import { Structure as _Structure_ } from "@aws-sdk/types";

export const RevokeCertificateInput: _Structure_ = {
  type: "structure",
  required: [
    "CertificateAuthorityArn",
    "CertificateSerial",
    "RevocationReason"
  ],
  members: {
    CertificateAuthorityArn: {
      shape: {
        type: "string",
        min: 5
      }
    },
    CertificateSerial: {
      shape: {
        type: "string"
      }
    },
    RevocationReason: {
      shape: {
        type: "string"
      }
    }
  }
};
