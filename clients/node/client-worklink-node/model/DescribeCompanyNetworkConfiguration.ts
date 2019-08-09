import { DescribeCompanyNetworkConfigurationInput } from "./DescribeCompanyNetworkConfigurationInput";
import { DescribeCompanyNetworkConfigurationOutput } from "./DescribeCompanyNetworkConfigurationOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
