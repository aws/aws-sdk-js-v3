import { DescribeEnvironmentHealthInput } from "../shapes/DescribeEnvironmentHealthInput";
import { DescribeEnvironmentHealthOutput } from "../shapes/DescribeEnvironmentHealthOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ElasticBeanstalkServiceException } from "../shapes/ElasticBeanstalkServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
