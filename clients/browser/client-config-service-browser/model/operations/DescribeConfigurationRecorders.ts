import { DescribeConfigurationRecordersInput } from "../shapes/DescribeConfigurationRecordersInput";
import { DescribeConfigurationRecordersOutput } from "../shapes/DescribeConfigurationRecordersOutput";
import { NoSuchConfigurationRecorderException } from "../shapes/NoSuchConfigurationRecorderException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
