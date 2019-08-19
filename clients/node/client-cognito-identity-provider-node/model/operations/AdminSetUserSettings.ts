import { AdminSetUserSettingsInput } from "../shapes/AdminSetUserSettingsInput";
import { AdminSetUserSettingsOutput } from "../shapes/AdminSetUserSettingsOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { UserNotFoundException } from "../shapes/UserNotFoundException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AdminSetUserSettings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AdminSetUserSettings",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AdminSetUserSettingsInput
  },
  output: {
    shape: AdminSetUserSettingsOutput
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
      shape: UserNotFoundException
    },
    {
      shape: InternalErrorException
    }
  ]
};
