import { SetRiskConfigurationInput } from "../shapes/SetRiskConfigurationInput";
import { SetRiskConfigurationOutput } from "../shapes/SetRiskConfigurationOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { UserPoolAddOnNotEnabledException } from "../shapes/UserPoolAddOnNotEnabledException";
import { CodeDeliveryFailureException } from "../shapes/CodeDeliveryFailureException";
import { InvalidEmailRoleAccessPolicyException } from "../shapes/InvalidEmailRoleAccessPolicyException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SetRiskConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetRiskConfiguration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SetRiskConfigurationInput
  },
  output: {
    shape: SetRiskConfigurationOutput
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
      shape: CodeDeliveryFailureException
    },
    {
      shape: InvalidEmailRoleAccessPolicyException
    },
    {
      shape: InternalErrorException
    }
  ]
};
