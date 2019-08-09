import { SetRiskConfigurationInput } from "./SetRiskConfigurationInput";
import { SetRiskConfigurationOutput } from "./SetRiskConfigurationOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { UserPoolAddOnNotEnabledException } from "./UserPoolAddOnNotEnabledException";
import { CodeDeliveryFailureException } from "./CodeDeliveryFailureException";
import { InvalidEmailRoleAccessPolicyException } from "./InvalidEmailRoleAccessPolicyException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
