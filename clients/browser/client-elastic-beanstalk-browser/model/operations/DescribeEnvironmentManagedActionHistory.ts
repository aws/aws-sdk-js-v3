import { DescribeEnvironmentManagedActionHistoryInput } from "../shapes/DescribeEnvironmentManagedActionHistoryInput";
import { DescribeEnvironmentManagedActionHistoryOutput } from "../shapes/DescribeEnvironmentManagedActionHistoryOutput";
import { ElasticBeanstalkServiceException } from "../shapes/ElasticBeanstalkServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeEnvironmentManagedActionHistory: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeEnvironmentManagedActionHistory",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeEnvironmentManagedActionHistoryInput
  },
  output: {
    shape: DescribeEnvironmentManagedActionHistoryOutput,
    resultWrapper: "DescribeEnvironmentManagedActionHistoryResult"
  },
  errors: [
    {
      shape: ElasticBeanstalkServiceException
    }
  ]
};
