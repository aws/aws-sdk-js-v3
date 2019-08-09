import { DescribeAliasInput } from "./DescribeAliasInput";
import { DescribeAliasOutput } from "./DescribeAliasOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { InvalidRequestException } from "./InvalidRequestException";
import { NotFoundException } from "./NotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
