import { CreateCertificateAuthorityAuditReportInput } from "./CreateCertificateAuthorityAuditReportInput";
import { CreateCertificateAuthorityAuditReportOutput } from "./CreateCertificateAuthorityAuditReportOutput";
import { RequestInProgressException } from "./RequestInProgressException";
import { RequestFailedException } from "./RequestFailedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArnException } from "./InvalidArnException";
import { InvalidArgsException } from "./InvalidArgsException";
import { InvalidStateException } from "./InvalidStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
