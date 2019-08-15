import { PutRetentionConfigurationInput } from "../shapes/PutRetentionConfigurationInput";
import { PutRetentionConfigurationOutput } from "../shapes/PutRetentionConfigurationOutput";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MaxNumberOfRetentionConfigurationsExceededException } from "../shapes/MaxNumberOfRetentionConfigurationsExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
