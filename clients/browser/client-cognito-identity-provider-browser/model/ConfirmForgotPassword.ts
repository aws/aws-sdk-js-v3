import { ConfirmForgotPasswordInput } from "./ConfirmForgotPasswordInput";
import { ConfirmForgotPasswordOutput } from "./ConfirmForgotPasswordOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { UnexpectedLambdaException } from "./UnexpectedLambdaException";
import { UserLambdaValidationException } from "./UserLambdaValidationException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidPasswordException } from "./InvalidPasswordException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { CodeMismatchException } from "./CodeMismatchException";
import { ExpiredCodeException } from "./ExpiredCodeException";
import { TooManyFailedAttemptsException } from "./TooManyFailedAttemptsException";
import { InvalidLambdaResponseException } from "./InvalidLambdaResponseException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { LimitExceededException } from "./LimitExceededException";
import { UserNotFoundException } from "./UserNotFoundException";
import { UserNotConfirmedException } from "./UserNotConfirmedException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
