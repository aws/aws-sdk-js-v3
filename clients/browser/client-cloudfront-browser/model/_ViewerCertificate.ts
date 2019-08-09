import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ViewerCertificate: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CloudFrontDefaultCertificate: {
      shape: {
        type: "boolean"
      }
    },
    IAMCertificateId: {
      shape: {
        type: "string"
      }
    },
    ACMCertificateArn: {
      shape: {
        type: "string"
      }
    },
    SSLSupportMethod: {
      shape: {
        type: "string"
      }
    },
    MinimumProtocolVersion: {
      shape: {
        type: "string"
      }
    },
    Certificate: {
      shape: {
        type: "string"
      }
    },
    CertificateSource: {
      shape: {
        type: "string"
      }
    }
  }
};
