import { DescribeFleetAttributesInput } from "./DescribeFleetAttributesInput";
import { DescribeFleetAttributesOutput } from "./DescribeFleetAttributesOutput";
import { InternalServiceException } from "./InternalServiceException";
import { NotFoundException } from "./NotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
