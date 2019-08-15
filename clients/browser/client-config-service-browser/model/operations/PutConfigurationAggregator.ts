import { PutConfigurationAggregatorInput } from "../shapes/PutConfigurationAggregatorInput";
import { PutConfigurationAggregatorOutput } from "../shapes/PutConfigurationAggregatorOutput";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InvalidRoleException } from "../shapes/InvalidRoleException";
import { OrganizationAccessDeniedException } from "../shapes/OrganizationAccessDeniedException";
import { NoAvailableOrganizationException } from "../shapes/NoAvailableOrganizationException";
import { OrganizationAllFeaturesNotEnabledException } from "../shapes/OrganizationAllFeaturesNotEnabledException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutConfigurationAggregator: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutConfigurationAggregator",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutConfigurationAggregatorInput
  },
  output: {
    shape: PutConfigurationAggregatorOutput
  },
  errors: [
    {
      shape: InvalidParameterValueException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InvalidRoleException
    },
    {
      shape: OrganizationAccessDeniedException
    },
    {
      shape: NoAvailableOrganizationException
    },
    {
      shape: OrganizationAllFeaturesNotEnabledException
    }
  ]
};
