import { Structure as _Structure_ } from "@aws-sdk/types";

export const UploadServerCertificateInput: _Structure_ = {
  type: "structure",
  required: ["ServerCertificateName", "CertificateBody", "PrivateKey"],
  members: {
    Path: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ServerCertificateName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CertificateBody: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PrivateKey: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    },
    CertificateChain: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
