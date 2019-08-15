import { DescribeAliasInput } from "../shapes/DescribeAliasInput";
import { DescribeAliasOutput } from "../shapes/DescribeAliasOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeAlias: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeAlias",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeAliasInput
  },
  output: {
    shape: DescribeAliasOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: NotFoundException
    },
    {
      shape: InternalServiceException
    }
  ]
};
