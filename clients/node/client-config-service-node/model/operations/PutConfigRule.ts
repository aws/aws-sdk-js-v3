import { PutConfigRuleInput } from "../shapes/PutConfigRuleInput";
import { PutConfigRuleOutput } from "../shapes/PutConfigRuleOutput";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MaxNumberOfConfigRulesExceededException } from "../shapes/MaxNumberOfConfigRulesExceededException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { InsufficientPermissionsException } from "../shapes/InsufficientPermissionsException";
import { NoAvailableConfigurationRecorderException } from "../shapes/NoAvailableConfigurationRecorderException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutConfigRule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutConfigRule",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutConfigRuleInput
  },
  output: {
    shape: PutConfigRuleOutput
  },
  errors: [
    {
      shape: InvalidParameterValueException
    },
    {
      shape: MaxNumberOfConfigRulesExceededException
    },
    {
      shape: ResourceInUseException
    },
    {
      shape: InsufficientPermissionsException
    },
    {
      shape: NoAvailableConfigurationRecorderException
    }
  ]
};
