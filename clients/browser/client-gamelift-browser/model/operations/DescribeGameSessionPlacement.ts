import { DescribeGameSessionPlacementInput } from "../shapes/DescribeGameSessionPlacementInput";
import { DescribeGameSessionPlacementOutput } from "../shapes/DescribeGameSessionPlacementOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeGameSessionPlacement: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeGameSessionPlacement",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeGameSessionPlacementInput
  },
  output: {
    shape: DescribeGameSessionPlacementOutput
  },
  errors: [
    {
      shape: InternalServiceException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: NotFoundException
    },
    {
      shape: UnauthorizedException
    }
  ]
};
