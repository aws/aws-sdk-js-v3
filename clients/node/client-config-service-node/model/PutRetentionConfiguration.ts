import { PutRetentionConfigurationInput } from "./PutRetentionConfigurationInput";
import { PutRetentionConfigurationOutput } from "./PutRetentionConfigurationOutput";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MaxNumberOfRetentionConfigurationsExceededException } from "./MaxNumberOfRetentionConfigurationsExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutRetentionConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutRetentionConfiguration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutRetentionConfigurationInput
  },
  output: {
    shape: PutRetentionConfigurationOutput
  },
  errors: [
    {
      shape: InvalidParameterValueException
    },
    {
      shape: MaxNumberOfRetentionConfigurationsExceededException
    }
  ]
};
