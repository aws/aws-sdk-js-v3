import { RegisterCACertificateInput } from "../shapes/RegisterCACertificateInput";
import { RegisterCACertificateOutput } from "../shapes/RegisterCACertificateOutput";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { RegistrationCodeValidationException } from "../shapes/RegistrationCodeValidationException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { CertificateValidationException } from "../shapes/CertificateValidationException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RegisterCACertificate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RegisterCACertificate",
  http: {
    method: "POST",
    requestUri: "/cacertificate"
  },
  input: {
    shape: RegisterCACertificateInput
  },
  output: {
    shape: RegisterCACertificateOutput
  },
  errors: [
    {
      shape: ResourceAlreadyExistsException
    },
    {
      shape: RegistrationCodeValidationException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: CertificateValidationException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: LimitExceededException
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
