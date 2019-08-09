import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Certificate: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CertificateIdentifier: {
      shape: {
        type: "string"
      }
    },
    CertificateCreationDate: {
      shape: {
        type: "timestamp"
      }
    },
    CertificatePem: {
      shape: {
        type: "string"
      }
    },
    CertificateWallet: {
      shape: {
        type: "blob"
      }
    },
    CertificateArn: {
      shape: {
        type: "string"
      }
    },
    CertificateOwner: {
      shape: {
        type: "string"
      }
    },
    ValidFromDate: {
      shape: {
        type: "timestamp"
      }
    },
    ValidToDate: {
      shape: {
        type: "timestamp"
      }
    },
    SigningAlgorithm: {
      shape: {
        type: "string"
      }
    },
    KeyLength: {
      shape: {
        type: "integer"
      }
    }
  }
};
