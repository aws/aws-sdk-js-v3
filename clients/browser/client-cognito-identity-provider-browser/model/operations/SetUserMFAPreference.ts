import { SetUserMFAPreferenceInput } from "../shapes/SetUserMFAPreferenceInput";
import { SetUserMFAPreferenceOutput } from "../shapes/SetUserMFAPreferenceOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { PasswordResetRequiredException } from "../shapes/PasswordResetRequiredException";
import { UserNotFoundException } from "../shapes/UserNotFoundException";
import { UserNotConfirmedException } from "../shapes/UserNotConfirmedException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SetUserMFAPreference: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetUserMFAPreference",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SetUserMFAPreferenceInput
  },
  output: {
    shape: SetUserMFAPreferenceOutput
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
