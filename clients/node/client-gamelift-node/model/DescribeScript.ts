import { DescribeScriptInput } from "./DescribeScriptInput";
import { DescribeScriptOutput } from "./DescribeScriptOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalServiceException } from "./InternalServiceException";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
