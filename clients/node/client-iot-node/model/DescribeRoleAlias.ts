import { DescribeRoleAliasInput } from "./DescribeRoleAliasInput";
import { DescribeRoleAliasOutput } from "./DescribeRoleAliasOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeRoleAlias: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeRoleAlias",
  http: {
    method: "GET",
    requestUri: "/role-aliases/{roleAlias}"
  },
  input: {
    shape: DescribeRoleAliasInput
  },
  output: {
    shape: DescribeRoleAliasOutput
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
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
