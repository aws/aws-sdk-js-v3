import { GlobalSignOutInput } from "../shapes/GlobalSignOutInput";
import { GlobalSignOutOutput } from "../shapes/GlobalSignOutOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { PasswordResetRequiredException } from "../shapes/PasswordResetRequiredException";
import { UserNotConfirmedException } from "../shapes/UserNotConfirmedException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GlobalSignOut: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GlobalSignOut",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GlobalSignOutInput
  },
  output: {
    shape: GlobalSignOutOutput
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
      shape: PasswordResetRequiredException
    },
    {
      shape: UserNotConfirmedException
    },
    {
      shape: InternalErrorException
    }
  ]
};
