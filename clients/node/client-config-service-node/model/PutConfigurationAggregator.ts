import { PutConfigurationAggregatorInput } from "./PutConfigurationAggregatorInput";
import { PutConfigurationAggregatorOutput } from "./PutConfigurationAggregatorOutput";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidRoleException } from "./InvalidRoleException";
import { OrganizationAccessDeniedException } from "./OrganizationAccessDeniedException";
import { NoAvailableOrganizationException } from "./NoAvailableOrganizationException";
import { OrganizationAllFeaturesNotEnabledException } from "./OrganizationAllFeaturesNotEnabledException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
