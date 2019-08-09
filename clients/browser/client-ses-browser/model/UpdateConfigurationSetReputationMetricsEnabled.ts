import { UpdateConfigurationSetReputationMetricsEnabledInput } from "./UpdateConfigurationSetReputationMetricsEnabledInput";
import { UpdateConfigurationSetReputationMetricsEnabledOutput } from "./UpdateConfigurationSetReputationMetricsEnabledOutput";
import { ConfigurationSetDoesNotExistException } from "./ConfigurationSetDoesNotExistException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
