import { DescribeEnvironmentHealthInput } from "./DescribeEnvironmentHealthInput";
import { DescribeEnvironmentHealthOutput } from "./DescribeEnvironmentHealthOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ElasticBeanstalkServiceException } from "./ElasticBeanstalkServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeEnvironmentHealth: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeEnvironmentHealth",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeEnvironmentHealthInput
  },
  output: {
    shape: DescribeEnvironmentHealthOutput,
    resultWrapper: "DescribeEnvironmentHealthResult"
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ElasticBeanstalkServiceException
    }
  ]
};
