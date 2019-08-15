import { UpdateRoleAliasInput } from "../shapes/UpdateRoleAliasInput";
import { UpdateRoleAliasOutput } from "../shapes/UpdateRoleAliasOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
