import { CreateRoleAliasInput } from "./CreateRoleAliasInput";
import { CreateRoleAliasOutput } from "./CreateRoleAliasOutput";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { InvalidRequestException } from "./InvalidRequestException";
import { LimitExceededException } from "./LimitExceededException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
