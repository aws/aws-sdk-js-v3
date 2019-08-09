import { DescribeRuntimeConfigurationInput } from "./DescribeRuntimeConfigurationInput";
import { DescribeRuntimeConfigurationOutput } from "./DescribeRuntimeConfigurationOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeRuntimeConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeRuntimeConfiguration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeRuntimeConfigurationInput
  },
  output: {
    shape: DescribeRuntimeConfigurationOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: InvalidRequestException
    }
  ]
};
