import { CreateCertificateAuthorityAuditReportInput } from "../shapes/CreateCertificateAuthorityAuditReportInput";
import { CreateCertificateAuthorityAuditReportOutput } from "../shapes/CreateCertificateAuthorityAuditReportOutput";
import { RequestInProgressException } from "../shapes/RequestInProgressException";
import { RequestFailedException } from "../shapes/RequestFailedException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { InvalidArgsException } from "../shapes/InvalidArgsException";
import { InvalidStateException } from "../shapes/InvalidStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateCertificateAuthorityAuditReport: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateCertificateAuthorityAuditReport",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateCertificateAuthorityAuditReportInput
  },
  output: {
    shape: CreateCertificateAuthorityAuditReportOutput
  },
  errors: [
    {
      shape: RequestInProgressException
    },
    {
      shape: RequestFailedException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidArnException
    },
    {
      shape: InvalidArgsException
    },
    {
      shape: InvalidStateException
    }
  ]
};
