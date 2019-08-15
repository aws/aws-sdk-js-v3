import { DescribeCertificateAuthorityAuditReportInput } from "../shapes/DescribeCertificateAuthorityAuditReportInput";
import { DescribeCertificateAuthorityAuditReportOutput } from "../shapes/DescribeCertificateAuthorityAuditReportOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { InvalidArgsException } from "../shapes/InvalidArgsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
