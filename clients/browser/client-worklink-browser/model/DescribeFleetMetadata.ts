import { DescribeFleetMetadataInput } from "./DescribeFleetMetadataInput";
import { DescribeFleetMetadataOutput } from "./DescribeFleetMetadataOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeFleetMetadata: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeFleetMetadata",
  http: {
    method: "POST",
    requestUri: "/describeFleetMetadata"
  },
  input: {
    shape: DescribeFleetMetadataInput
  },
  output: {
    shape: DescribeFleetMetadataOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
