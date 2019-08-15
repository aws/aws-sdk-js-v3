import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateCertificateAuthorityAuditReportInput: _Structure_ = {
  type: "structure",
  required: [
    "CertificateAuthorityArn",
    "S3BucketName",
    "AuditReportResponseFormat"
  ],
  members: {
    CertificateAuthorityArn: {
      shape: {
        type: "string",
        min: 5
      }
    },
    S3BucketName: {
      shape: {
        type: "string"
      }
    },
    AuditReportResponseFormat: {
      shape: {
        type: "string"
      }
    }
  }
};
