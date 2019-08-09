import { AdminSetUserSettingsInput } from "./AdminSetUserSettingsInput";
import { AdminSetUserSettingsOutput } from "./AdminSetUserSettingsOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { UserNotFoundException } from "./UserNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
