import { ConfirmSignUpInput } from "../shapes/ConfirmSignUpInput";
import { ConfirmSignUpOutput } from "../shapes/ConfirmSignUpOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { UnexpectedLambdaException } from "../shapes/UnexpectedLambdaException";
import { UserLambdaValidationException } from "../shapes/UserLambdaValidationException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { TooManyFailedAttemptsException } from "../shapes/TooManyFailedAttemptsException";
import { CodeMismatchException } from "../shapes/CodeMismatchException";
import { ExpiredCodeException } from "../shapes/ExpiredCodeException";
import { InvalidLambdaResponseException } from "../shapes/InvalidLambdaResponseException";
import { AliasExistsException } from "../shapes/AliasExistsException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { UserNotFoundException } from "../shapes/UserNotFoundException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ConfirmSignUp: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ConfirmSignUp",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ConfirmSignUpInput
  },
  output: {
    shape: ConfirmSignUpOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: UnexpectedLambdaException
    },
    {
      shape: UserLambdaValidationException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: TooManyFailedAttemptsException
    },
    {
      shape: CodeMismatchException
    },
    {
      shape: ExpiredCodeException
    },
    {
      shape: InvalidLambdaResponseException
    },
    {
      shape: AliasExistsException
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
      shape: InternalErrorException
    }
  ]
};
