import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeCertificateAuthorityAuditReportOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AuditReportStatus: {
      shape: {
        type: "string"
      }
    },
    S3BucketName: {
      shape: {
        type: "string"
      }
    },
    S3Key: {
      shape: {
        type: "string"
      }
    },
    CreatedAt: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
