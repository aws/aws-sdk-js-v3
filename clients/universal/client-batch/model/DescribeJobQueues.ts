import { DescribeJobQueuesInput } from "./DescribeJobQueuesInput";
import { DescribeJobQueuesOutput } from "./DescribeJobQueuesOutput";
import { ClientException } from "./ClientException";
import { ServerException } from "./ServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
