import { DescribeIdentityProviderConfigurationInput } from "../shapes/DescribeIdentityProviderConfigurationInput";
import { DescribeIdentityProviderConfigurationOutput } from "../shapes/DescribeIdentityProviderConfigurationOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeIdentityProviderConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeIdentityProviderConfiguration",
  http: {
    method: "POST",
    requestUri: "/describeIdentityProviderConfiguration"
  },
  input: {
    shape: DescribeIdentityProviderConfigurationInput
  },
  output: {
    shape: DescribeIdentityProviderConfigurationOutput
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
