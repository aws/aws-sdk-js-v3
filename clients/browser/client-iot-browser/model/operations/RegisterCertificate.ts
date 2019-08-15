import { RegisterCertificateInput } from "../shapes/RegisterCertificateInput";
import { RegisterCertificateOutput } from "../shapes/RegisterCertificateOutput";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { CertificateValidationException } from "../shapes/CertificateValidationException";
import { CertificateStateException } from "../shapes/CertificateStateException";
import { CertificateConflictException } from "../shapes/CertificateConflictException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
