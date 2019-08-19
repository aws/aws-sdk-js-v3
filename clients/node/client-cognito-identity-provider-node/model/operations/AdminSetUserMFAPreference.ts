import { AdminSetUserMFAPreferenceInput } from "../shapes/AdminSetUserMFAPreferenceInput";
import { AdminSetUserMFAPreferenceOutput } from "../shapes/AdminSetUserMFAPreferenceOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { PasswordResetRequiredException } from "../shapes/PasswordResetRequiredException";
import { UserNotFoundException } from "../shapes/UserNotFoundException";
import { UserNotConfirmedException } from "../shapes/UserNotConfirmedException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AdminSetUserMFAPreference: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AdminSetUserMFAPreference",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AdminSetUserMFAPreferenceInput
  },
  output: {
    shape: AdminSetUserMFAPreferenceOutput
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
