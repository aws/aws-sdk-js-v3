import { UpdateRoleAliasInput } from "./UpdateRoleAliasInput";
import { UpdateRoleAliasOutput } from "./UpdateRoleAliasOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateRoleAlias: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateRoleAlias",
  http: {
    method: "PUT",
    requestUri: "/role-aliases/{roleAlias}"
  },
  input: {
    shape: UpdateRoleAliasInput
  },
  output: {
    shape: UpdateRoleAliasOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: InternalFailureException
    }
  ]
};
