import { ListRoleAliasesInput } from "./ListRoleAliasesInput";
import { ListRoleAliasesOutput } from "./ListRoleAliasesOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListRoleAliases: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListRoleAliases",
  http: {
    method: "GET",
    requestUri: "/role-aliases"
  },
  input: {
    shape: ListRoleAliasesInput
  },
  output: {
    shape: ListRoleAliasesOutput
  },
  errors: [
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
