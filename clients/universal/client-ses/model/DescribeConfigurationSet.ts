import { DescribeConfigurationSetInput } from "./DescribeConfigurationSetInput";
import { DescribeConfigurationSetOutput } from "./DescribeConfigurationSetOutput";
import { ConfigurationSetDoesNotExistException } from "./ConfigurationSetDoesNotExistException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
