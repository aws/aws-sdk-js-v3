import { DescribeEndpointInput } from "../shapes/DescribeEndpointInput";
import { DescribeEndpointOutput } from "../shapes/DescribeEndpointOutput";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeEndpoint: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeEndpoint",
  http: {
    method: "GET",
    requestUri: "/endpoint"
  },
  input: {
    shape: DescribeEndpointInput
  },
  output: {
    shape: DescribeEndpointOutput
  },
  errors: [
    {
      shape: InternalFailureException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: ThrottlingException
    }
  ]
};
