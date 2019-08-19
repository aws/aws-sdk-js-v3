import { ConfirmForgotPasswordInput } from "../shapes/ConfirmForgotPasswordInput";
import { ConfirmForgotPasswordOutput } from "../shapes/ConfirmForgotPasswordOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { UnexpectedLambdaException } from "../shapes/UnexpectedLambdaException";
import { UserLambdaValidationException } from "../shapes/UserLambdaValidationException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidPasswordException } from "../shapes/InvalidPasswordException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { CodeMismatchException } from "../shapes/CodeMismatchException";
import { ExpiredCodeException } from "../shapes/ExpiredCodeException";
import { TooManyFailedAttemptsException } from "../shapes/TooManyFailedAttemptsException";
import { InvalidLambdaResponseException } from "../shapes/InvalidLambdaResponseException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { UserNotFoundException } from "../shapes/UserNotFoundException";
import { UserNotConfirmedException } from "../shapes/UserNotConfirmedException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ConfirmForgotPassword: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ConfirmForgotPassword",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ConfirmForgotPasswordInput
  },
  output: {
    shape: ConfirmForgotPasswordOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: UnexpectedLambdaException
    },
    {
      shape: UserLambdaValidationException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: InvalidPasswordException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: CodeMismatchException
    },
    {
      shape: ExpiredCodeException
    },
    {
      shape: TooManyFailedAttemptsException
    },
    {
      shape: InvalidLambdaResponseException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: LimitExceededException
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
