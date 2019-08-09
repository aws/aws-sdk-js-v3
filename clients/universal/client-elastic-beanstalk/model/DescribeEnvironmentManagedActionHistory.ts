import { DescribeEnvironmentManagedActionHistoryInput } from "./DescribeEnvironmentManagedActionHistoryInput";
import { DescribeEnvironmentManagedActionHistoryOutput } from "./DescribeEnvironmentManagedActionHistoryOutput";
import { ElasticBeanstalkServiceException } from "./ElasticBeanstalkServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
