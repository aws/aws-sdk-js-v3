import { ConfirmSignUpInput } from "./ConfirmSignUpInput";
import { ConfirmSignUpOutput } from "./ConfirmSignUpOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { UnexpectedLambdaException } from "./UnexpectedLambdaException";
import { UserLambdaValidationException } from "./UserLambdaValidationException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { TooManyFailedAttemptsException } from "./TooManyFailedAttemptsException";
import { CodeMismatchException } from "./CodeMismatchException";
import { ExpiredCodeException } from "./ExpiredCodeException";
import { InvalidLambdaResponseException } from "./InvalidLambdaResponseException";
import { AliasExistsException } from "./AliasExistsException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { LimitExceededException } from "./LimitExceededException";
import { UserNotFoundException } from "./UserNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
