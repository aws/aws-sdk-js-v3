import { DescribeGameSessionPlacementInput } from "./DescribeGameSessionPlacementInput";
import { DescribeGameSessionPlacementOutput } from "./DescribeGameSessionPlacementOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidRequestException } from "./InvalidRequestException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
