import { DescribeConfigurationRecorderStatusInput } from "./DescribeConfigurationRecorderStatusInput";
import { DescribeConfigurationRecorderStatusOutput } from "./DescribeConfigurationRecorderStatusOutput";
import { NoSuchConfigurationRecorderException } from "./NoSuchConfigurationRecorderException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeConfigurationRecorderStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeConfigurationRecorderStatus",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeConfigurationRecorderStatusInput
  },
  output: {
    shape: DescribeConfigurationRecorderStatusOutput
  },
  errors: [
    {
      shape: NoSuchConfigurationRecorderException
    }
  ]
};
