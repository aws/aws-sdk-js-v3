import { AdminConfirmSignUpInput } from "../shapes/AdminConfirmSignUpInput";
import { AdminConfirmSignUpOutput } from "../shapes/AdminConfirmSignUpOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { UnexpectedLambdaException } from "../shapes/UnexpectedLambdaException";
import { UserLambdaValidationException } from "../shapes/UserLambdaValidationException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { TooManyFailedAttemptsException } from "../shapes/TooManyFailedAttemptsException";
import { InvalidLambdaResponseException } from "../shapes/InvalidLambdaResponseException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { UserNotFoundException } from "../shapes/UserNotFoundException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
