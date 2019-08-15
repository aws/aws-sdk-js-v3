import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeCertificateAuthorityAuditReportInput: _Structure_ = {
  type: "structure",
  required: ["CertificateAuthorityArn", "AuditReportId"],
  members: {
    CertificateAuthorityArn: {
      shape: {
        type: "string",
        min: 5
      }
    },
    AuditReportId: {
      shape: {
        type: "string",
        min: 36
      }
    }
  }
};
