import { DescribeFleetAttributesInput } from "../shapes/DescribeFleetAttributesInput";
import { DescribeFleetAttributesOutput } from "../shapes/DescribeFleetAttributesOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeFleetAttributes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeFleetAttributes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeFleetAttributesInput
  },
  output: {
    shape: DescribeFleetAttributesOutput
  },
  errors: [
    {
      shape: InternalServiceException
    },
    {
      shape: NotFoundException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: UnauthorizedException
    }
  ]
};
