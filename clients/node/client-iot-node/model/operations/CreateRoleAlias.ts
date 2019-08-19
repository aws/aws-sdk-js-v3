import { CreateRoleAliasInput } from "../shapes/CreateRoleAliasInput";
import { CreateRoleAliasOutput } from "../shapes/CreateRoleAliasOutput";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateRoleAlias: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateRoleAlias",
  http: {
    method: "POST",
    requestUri: "/role-aliases/{roleAlias}"
  },
  input: {
    shape: CreateRoleAliasInput
  },
  output: {
    shape: CreateRoleAliasOutput
  },
  errors: [
    {
      shape: ResourceAlreadyExistsException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: LimitExceededException
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
