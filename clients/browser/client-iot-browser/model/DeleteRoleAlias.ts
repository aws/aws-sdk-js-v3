import { DeleteRoleAliasInput } from "./DeleteRoleAliasInput";
import { DeleteRoleAliasOutput } from "./DeleteRoleAliasOutput";
import { DeleteConflictException } from "./DeleteConflictException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteRoleAlias: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteRoleAlias",
  http: {
    method: "DELETE",
    requestUri: "/role-aliases/{roleAlias}"
  },
  input: {
    shape: DeleteRoleAliasInput
  },
  output: {
    shape: DeleteRoleAliasOutput
  },
  errors: [
    {
      shape: DeleteConflictException
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
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
