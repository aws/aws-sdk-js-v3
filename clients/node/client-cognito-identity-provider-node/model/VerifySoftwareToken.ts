import { VerifySoftwareTokenInput } from "./VerifySoftwareTokenInput";
import { VerifySoftwareTokenOutput } from "./VerifySoftwareTokenOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidUserPoolConfigurationException } from "./InvalidUserPoolConfigurationException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { PasswordResetRequiredException } from "./PasswordResetRequiredException";
import { UserNotFoundException } from "./UserNotFoundException";
import { UserNotConfirmedException } from "./UserNotConfirmedException";
import { InternalErrorException } from "./InternalErrorException";
import { EnableSoftwareTokenMFAException } from "./EnableSoftwareTokenMFAException";
import { SoftwareTokenMFANotFoundException } from "./SoftwareTokenMFANotFoundException";
import { CodeMismatchException } from "./CodeMismatchException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
