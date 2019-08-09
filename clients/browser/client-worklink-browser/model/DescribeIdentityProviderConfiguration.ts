import { DescribeIdentityProviderConfigurationInput } from "./DescribeIdentityProviderConfigurationInput";
import { DescribeIdentityProviderConfigurationOutput } from "./DescribeIdentityProviderConfigurationOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
