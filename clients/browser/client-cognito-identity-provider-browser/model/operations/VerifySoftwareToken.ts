import { VerifySoftwareTokenInput } from "../shapes/VerifySoftwareTokenInput";
import { VerifySoftwareTokenOutput } from "../shapes/VerifySoftwareTokenOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidUserPoolConfigurationException } from "../shapes/InvalidUserPoolConfigurationException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { PasswordResetRequiredException } from "../shapes/PasswordResetRequiredException";
import { UserNotFoundException } from "../shapes/UserNotFoundException";
import { UserNotConfirmedException } from "../shapes/UserNotConfirmedException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { EnableSoftwareTokenMFAException } from "../shapes/EnableSoftwareTokenMFAException";
import { SoftwareTokenMFANotFoundException } from "../shapes/SoftwareTokenMFANotFoundException";
import { CodeMismatchException } from "../shapes/CodeMismatchException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const VerifySoftwareToken: _Operation_ = {
  metadata: ServiceMetadata,
  name: "VerifySoftwareToken",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: VerifySoftwareTokenInput
  },
  output: {
    shape: VerifySoftwareTokenOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidUserPoolConfigurationException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: PasswordResetRequiredException
    },
    {
      shape: UserNotFoundException
    },
    {
      shape: UserNotConfirmedException
    },
    {
      shape: InternalErrorException
    },
    {
      shape: EnableSoftwareTokenMFAException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: SoftwareTokenMFANotFoundException
    },
    {
      shape: CodeMismatchException
    }
  ]
};
