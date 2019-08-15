import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ServerCertificateMetadata: _Structure_ = {
  type: "structure",
  required: ["Path", "ServerCertificateName", "ServerCertificateId", "Arn"],
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
    ServerCertificateId: {
      shape: {
        type: "string",
        min: 16
      }
    },
    Arn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    UploadDate: {
      shape: {
        type: "timestamp"
      }
    },
    Expiration: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
