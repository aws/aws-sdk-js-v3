import { DescribeCompanyNetworkConfigurationInput } from "../shapes/DescribeCompanyNetworkConfigurationInput";
import { DescribeCompanyNetworkConfigurationOutput } from "../shapes/DescribeCompanyNetworkConfigurationOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeCompanyNetworkConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeCompanyNetworkConfiguration",
  http: {
    method: "POST",
    requestUri: "/describeCompanyNetworkConfiguration"
  },
  input: {
    shape: DescribeCompanyNetworkConfigurationInput
  },
  output: {
    shape: DescribeCompanyNetworkConfigurationOutput
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
