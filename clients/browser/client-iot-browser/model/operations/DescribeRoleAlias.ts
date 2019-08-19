import { DescribeRoleAliasInput } from "../shapes/DescribeRoleAliasInput";
import { DescribeRoleAliasOutput } from "../shapes/DescribeRoleAliasOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
