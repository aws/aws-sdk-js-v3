import { DeleteRetentionConfigurationInput } from "../shapes/DeleteRetentionConfigurationInput";
import { DeleteRetentionConfigurationOutput } from "../shapes/DeleteRetentionConfigurationOutput";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { NoSuchRetentionConfigurationException } from "../shapes/NoSuchRetentionConfigurationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteRetentionConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteRetentionConfiguration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteRetentionConfigurationInput
  },
  output: {
    shape: DeleteRetentionConfigurationOutput
  },
  errors: [
    {
      shape: InvalidParameterValueException
    },
    {
      shape: NoSuchRetentionConfigurationException
    }
  ]
};
