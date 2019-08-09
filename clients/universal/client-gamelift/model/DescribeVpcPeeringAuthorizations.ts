import { DescribeVpcPeeringAuthorizationsInput } from "./DescribeVpcPeeringAuthorizationsInput";
import { DescribeVpcPeeringAuthorizationsOutput } from "./DescribeVpcPeeringAuthorizationsOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
