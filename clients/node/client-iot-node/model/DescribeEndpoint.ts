import { DescribeEndpointInput } from "./DescribeEndpointInput";
import { DescribeEndpointOutput } from "./DescribeEndpointOutput";
import { InternalFailureException } from "./InternalFailureException";
import { InvalidRequestException } from "./InvalidRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
