import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SigningCertificate: _Structure_ = {
  type: "structure",
  required: ["UserName", "CertificateId", "CertificateBody", "Status"],
  members: {
    UserName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CertificateId: {
      shape: {
        type: "string",
        min: 24
      }
    },
    CertificateBody: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    UploadDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
