import { DescribeRetentionConfigurationsInput } from "./DescribeRetentionConfigurationsInput";
import { DescribeRetentionConfigurationsOutput } from "./DescribeRetentionConfigurationsOutput";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { NoSuchRetentionConfigurationException } from "./NoSuchRetentionConfigurationException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
