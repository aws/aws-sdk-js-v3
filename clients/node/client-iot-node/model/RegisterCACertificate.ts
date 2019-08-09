import { RegisterCACertificateInput } from "./RegisterCACertificateInput";
import { RegisterCACertificateOutput } from "./RegisterCACertificateOutput";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { RegistrationCodeValidationException } from "./RegistrationCodeValidationException";
import { InvalidRequestException } from "./InvalidRequestException";
import { CertificateValidationException } from "./CertificateValidationException";
import { ThrottlingException } from "./ThrottlingException";
import { LimitExceededException } from "./LimitExceededException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
