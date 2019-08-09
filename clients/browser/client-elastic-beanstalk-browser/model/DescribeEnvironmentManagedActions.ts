import { DescribeEnvironmentManagedActionsInput } from "./DescribeEnvironmentManagedActionsInput";
import { DescribeEnvironmentManagedActionsOutput } from "./DescribeEnvironmentManagedActionsOutput";
import { ElasticBeanstalkServiceException } from "./ElasticBeanstalkServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeEnvironmentManagedActions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeEnvironmentManagedActions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeEnvironmentManagedActionsInput
  },
  output: {
    shape: DescribeEnvironmentManagedActionsOutput,
    resultWrapper: "DescribeEnvironmentManagedActionsResult"
  },
  errors: [
    {
      shape: ElasticBeanstalkServiceException
    }
  ]
};
