import { DescribeScriptInput } from "../shapes/DescribeScriptInput";
import { DescribeScriptOutput } from "../shapes/DescribeScriptOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeScript: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeScript",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeScriptInput
  },
  output: {
    shape: DescribeScriptOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: NotFoundException
    }
  ]
};
