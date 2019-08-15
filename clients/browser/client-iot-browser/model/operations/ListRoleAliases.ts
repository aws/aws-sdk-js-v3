import { ListRoleAliasesInput } from "../shapes/ListRoleAliasesInput";
import { ListRoleAliasesOutput } from "../shapes/ListRoleAliasesOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
