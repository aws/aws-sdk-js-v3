import { DescribeConfigurationRecordersInput } from "./DescribeConfigurationRecordersInput";
import { DescribeConfigurationRecordersOutput } from "./DescribeConfigurationRecordersOutput";
import { NoSuchConfigurationRecorderException } from "./NoSuchConfigurationRecorderException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeConfigurationRecorders: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeConfigurationRecorders",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeConfigurationRecordersInput
  },
  output: {
    shape: DescribeConfigurationRecordersOutput
  },
  errors: [
    {
      shape: NoSuchConfigurationRecorderException
    }
  ]
};
