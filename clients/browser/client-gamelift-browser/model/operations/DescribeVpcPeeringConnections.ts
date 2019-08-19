import { DescribeVpcPeeringConnectionsInput } from "../shapes/DescribeVpcPeeringConnectionsInput";
import { DescribeVpcPeeringConnectionsOutput } from "../shapes/DescribeVpcPeeringConnectionsOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeVpcPeeringConnections: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeVpcPeeringConnections",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeVpcPeeringConnectionsInput
  },
  output: {
    shape: DescribeVpcPeeringConnectionsOutput
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
