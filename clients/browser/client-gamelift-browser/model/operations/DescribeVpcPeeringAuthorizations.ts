import { DescribeVpcPeeringAuthorizationsInput } from "../shapes/DescribeVpcPeeringAuthorizationsInput";
import { DescribeVpcPeeringAuthorizationsOutput } from "../shapes/DescribeVpcPeeringAuthorizationsOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeVpcPeeringAuthorizations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeVpcPeeringAuthorizations",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeVpcPeeringAuthorizationsInput
  },
  output: {
    shape: DescribeVpcPeeringAuthorizationsOutput
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
    }
  ]
};
