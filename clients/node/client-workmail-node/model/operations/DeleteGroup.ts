import { DeleteGroupInput } from "../shapes/DeleteGroupInput";
import { DeleteGroupOutput } from "../shapes/DeleteGroupOutput";
import { DirectoryServiceAuthenticationFailedException } from "../shapes/DirectoryServiceAuthenticationFailedException";
import { DirectoryUnavailableException } from "../shapes/DirectoryUnavailableException";
import { EntityStateException } from "../shapes/EntityStateException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { OrganizationNotFoundException } from "../shapes/OrganizationNotFoundException";
import { OrganizationStateException } from "../shapes/OrganizationStateException";
import { UnsupportedOperationException } from "../shapes/UnsupportedOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
