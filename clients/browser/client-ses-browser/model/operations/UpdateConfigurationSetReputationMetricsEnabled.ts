import { UpdateConfigurationSetReputationMetricsEnabledInput } from "../shapes/UpdateConfigurationSetReputationMetricsEnabledInput";
import { UpdateConfigurationSetReputationMetricsEnabledOutput } from "../shapes/UpdateConfigurationSetReputationMetricsEnabledOutput";
import { ConfigurationSetDoesNotExistException } from "../shapes/ConfigurationSetDoesNotExistException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateConfigurationSetReputationMetricsEnabled: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateConfigurationSetReputationMetricsEnabled",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateConfigurationSetReputationMetricsEnabledInput
  },
  output: {
    shape: UpdateConfigurationSetReputationMetricsEnabledOutput
  },
  errors: [
    {
      shape: ConfigurationSetDoesNotExistException
    }
  ]
};
