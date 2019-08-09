import { DeleteGroupInput } from "./DeleteGroupInput";
import { DeleteGroupOutput } from "./DeleteGroupOutput";
import { DirectoryServiceAuthenticationFailedException } from "./DirectoryServiceAuthenticationFailedException";
import { DirectoryUnavailableException } from "./DirectoryUnavailableException";
import { EntityStateException } from "./EntityStateException";
import { InvalidParameterException } from "./InvalidParameterException";
import { OrganizationNotFoundException } from "./OrganizationNotFoundException";
import { OrganizationStateException } from "./OrganizationStateException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteGroupInput
  },
  output: {
    shape: DeleteGroupOutput
  },
  errors: [
    {
      shape: DirectoryServiceAuthenticationFailedException
    },
    {
      shape: DirectoryUnavailableException
    },
    {
      shape: EntityStateException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: OrganizationNotFoundException
    },
    {
      shape: OrganizationStateException
    },
    {
      shape: UnsupportedOperationException
    }
  ]
};
