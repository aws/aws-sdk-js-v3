import { RegisterCertificateInput } from "./RegisterCertificateInput";
import { RegisterCertificateOutput } from "./RegisterCertificateOutput";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { InvalidRequestException } from "./InvalidRequestException";
import { CertificateValidationException } from "./CertificateValidationException";
import { CertificateStateException } from "./CertificateStateException";
import { CertificateConflictException } from "./CertificateConflictException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RegisterCertificate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RegisterCertificate",
  http: {
    method: "POST",
    requestUri: "/certificate/register"
  },
  input: {
    shape: RegisterCertificateInput
  },
  output: {
    shape: RegisterCertificateOutput
  },
  errors: [
    {
      shape: ResourceAlreadyExistsException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: CertificateValidationException
    },
    {
      shape: CertificateStateException
    },
    {
      shape: CertificateConflictException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: InternalFailureException
    }
  ]
};
