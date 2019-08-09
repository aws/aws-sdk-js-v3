import { InitiateAuthInput } from "./InitiateAuthInput";
import { InitiateAuthOutput } from "./InitiateAuthOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { UnexpectedLambdaException } from "./UnexpectedLambdaException";
import { InvalidUserPoolConfigurationException } from "./InvalidUserPoolConfigurationException";
import { UserLambdaValidationException } from "./UserLambdaValidationException";
import { InvalidLambdaResponseException } from "./InvalidLambdaResponseException";
import { PasswordResetRequiredException } from "./PasswordResetRequiredException";
import { UserNotFoundException } from "./UserNotFoundException";
import { UserNotConfirmedException } from "./UserNotConfirmedException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const InitiateAuth: _Operation_ = {
  metadata: ServiceMetadata,
  name: "InitiateAuth",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: InitiateAuthInput
  },
  output: {
    shape: InitiateAuthOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: UnexpectedLambdaException
    },
    {
      shape: InvalidUserPoolConfigurationException
    },
    {
      shape: UserLambdaValidationException
    },
    {
      shape: InvalidLambdaResponseException
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
    }
  ]
};
