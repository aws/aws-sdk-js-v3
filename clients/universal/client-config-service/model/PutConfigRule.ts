import { PutConfigRuleInput } from "./PutConfigRuleInput";
import { PutConfigRuleOutput } from "./PutConfigRuleOutput";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MaxNumberOfConfigRulesExceededException } from "./MaxNumberOfConfigRulesExceededException";
import { ResourceInUseException } from "./ResourceInUseException";
import { InsufficientPermissionsException } from "./InsufficientPermissionsException";
import { NoAvailableConfigurationRecorderException } from "./NoAvailableConfigurationRecorderException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
