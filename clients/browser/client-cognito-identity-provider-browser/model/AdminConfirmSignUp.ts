import { AdminConfirmSignUpInput } from "./AdminConfirmSignUpInput";
import { AdminConfirmSignUpOutput } from "./AdminConfirmSignUpOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { UnexpectedLambdaException } from "./UnexpectedLambdaException";
import { UserLambdaValidationException } from "./UserLambdaValidationException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { TooManyFailedAttemptsException } from "./TooManyFailedAttemptsException";
import { InvalidLambdaResponseException } from "./InvalidLambdaResponseException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { LimitExceededException } from "./LimitExceededException";
import { UserNotFoundException } from "./UserNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AdminConfirmSignUp: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AdminConfirmSignUp",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AdminConfirmSignUpInput
  },
  output: {
    shape: AdminConfirmSignUpOutput
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
      shape: InternalErrorException
    }
  ]
};
