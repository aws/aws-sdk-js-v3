import { DescribeRiskConfigurationInput } from "../shapes/DescribeRiskConfigurationInput";
import { DescribeRiskConfigurationOutput } from "../shapes/DescribeRiskConfigurationOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { UserPoolAddOnNotEnabledException } from "../shapes/UserPoolAddOnNotEnabledException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeRiskConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeRiskConfiguration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeRiskConfigurationInput
  },
  output: {
    shape: DescribeRiskConfigurationOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: UserPoolAddOnNotEnabledException
    },
    {
      shape: InternalErrorException
    }
  ]
};
