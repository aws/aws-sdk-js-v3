import { DescribeCertificateAuthorityAuditReportInput } from "./DescribeCertificateAuthorityAuditReportInput";
import { DescribeCertificateAuthorityAuditReportOutput } from "./DescribeCertificateAuthorityAuditReportOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArnException } from "./InvalidArnException";
import { InvalidArgsException } from "./InvalidArgsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeCertificateAuthorityAuditReport: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeCertificateAuthorityAuditReport",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeCertificateAuthorityAuditReportInput
  },
  output: {
    shape: DescribeCertificateAuthorityAuditReportOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidArnException
    },
    {
      shape: InvalidArgsException
    }
  ]
};
