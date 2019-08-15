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
    CertificateType: {
      shape: {
        type: "string"
      }
    },
    Thumbprint: {
      shape: {
        type: "string"
      }
    },
    ValidFrom: {
      shape: {
        type: "timestamp"
      }
    },
    ValidTill: {
      shape: {
        type: "timestamp"
      }
    },
    CertificateArn: {
      shape: {
        type: "string"
      }
    }
  }
};
