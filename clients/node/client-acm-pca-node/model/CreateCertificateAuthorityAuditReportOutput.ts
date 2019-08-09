import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateCertificateAuthorityAuditReportOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AuditReportId: {
      shape: {
        type: "string",
        min: 36
      }
    },
    S3Key: {
      shape: {
        type: "string"
      }
    }
  }
};
