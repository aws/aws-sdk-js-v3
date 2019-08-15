import { DescribeJobQueuesInput } from "../shapes/DescribeJobQueuesInput";
import { DescribeJobQueuesOutput } from "../shapes/DescribeJobQueuesOutput";
import { ClientException } from "../shapes/ClientException";
import { ServerException } from "../shapes/ServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeJobQueues: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeJobQueues",
  http: {
    method: "POST",
    requestUri: "/v1/describejobqueues"
  },
  input: {
    shape: DescribeJobQueuesInput
  },
  output: {
    shape: DescribeJobQueuesOutput
  },
  errors: [
    {
      shape: ClientException
    },
    {
      shape: ServerException
    }
  ]
};
