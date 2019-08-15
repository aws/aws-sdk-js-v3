import { DescribeInstancesHealthInput } from "../shapes/DescribeInstancesHealthInput";
import { DescribeInstancesHealthOutput } from "../shapes/DescribeInstancesHealthOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ElasticBeanstalkServiceException } from "../shapes/ElasticBeanstalkServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeInstancesHealth: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeInstancesHealth",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeInstancesHealthInput
  },
  output: {
    shape: DescribeInstancesHealthOutput,
    resultWrapper: "DescribeInstancesHealthResult"
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
