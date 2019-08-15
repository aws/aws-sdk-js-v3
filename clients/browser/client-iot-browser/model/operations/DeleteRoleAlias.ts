import { DeleteRoleAliasInput } from "../shapes/DeleteRoleAliasInput";
import { DeleteRoleAliasOutput } from "../shapes/DeleteRoleAliasOutput";
import { DeleteConflictException } from "../shapes/DeleteConflictException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
