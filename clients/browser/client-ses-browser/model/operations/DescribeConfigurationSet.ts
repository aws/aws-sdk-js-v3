import { DescribeConfigurationSetInput } from "../shapes/DescribeConfigurationSetInput";
import { DescribeConfigurationSetOutput } from "../shapes/DescribeConfigurationSetOutput";
import { ConfigurationSetDoesNotExistException } from "../shapes/ConfigurationSetDoesNotExistException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeConfigurationSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeConfigurationSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeConfigurationSetInput
  },
  output: {
    shape: DescribeConfigurationSetOutput,
    resultWrapper: "DescribeConfigurationSetResult"
  },
  errors: [
    {
      shape: ConfigurationSetDoesNotExistException
    }
  ]
};
