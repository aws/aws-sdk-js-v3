import { DescribeRiskConfigurationInput } from "./DescribeRiskConfigurationInput";
import { DescribeRiskConfigurationOutput } from "./DescribeRiskConfigurationOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { UserPoolAddOnNotEnabledException } from "./UserPoolAddOnNotEnabledException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
