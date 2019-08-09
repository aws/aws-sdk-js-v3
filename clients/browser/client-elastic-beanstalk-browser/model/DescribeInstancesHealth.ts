import { DescribeInstancesHealthInput } from "./DescribeInstancesHealthInput";
import { DescribeInstancesHealthOutput } from "./DescribeInstancesHealthOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ElasticBeanstalkServiceException } from "./ElasticBeanstalkServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
