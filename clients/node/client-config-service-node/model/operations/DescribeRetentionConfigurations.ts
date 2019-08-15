import { DescribeRetentionConfigurationsInput } from "../shapes/DescribeRetentionConfigurationsInput";
import { DescribeRetentionConfigurationsOutput } from "../shapes/DescribeRetentionConfigurationsOutput";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { NoSuchRetentionConfigurationException } from "../shapes/NoSuchRetentionConfigurationException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeRetentionConfigurations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeRetentionConfigurations",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeRetentionConfigurationsInput
  },
  output: {
    shape: DescribeRetentionConfigurationsOutput
  },
  errors: [
    {
      shape: InvalidParameterValueException
    },
    {
      shape: NoSuchRetentionConfigurationException
    },
    {
      shape: InvalidNextTokenException
    }
  ]
};
