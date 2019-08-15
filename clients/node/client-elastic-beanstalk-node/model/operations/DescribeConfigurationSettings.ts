import { DescribeConfigurationSettingsInput } from "../shapes/DescribeConfigurationSettingsInput";
import { DescribeConfigurationSettingsOutput } from "../shapes/DescribeConfigurationSettingsOutput";
import { TooManyBucketsException } from "../shapes/TooManyBucketsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeConfigurationSettings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeConfigurationSettings",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeConfigurationSettingsInput
  },
  output: {
    shape: DescribeConfigurationSettingsOutput,
    resultWrapper: "DescribeConfigurationSettingsResult"
  },
  errors: [
    {
      shape: TooManyBucketsException
    }
  ]
};
