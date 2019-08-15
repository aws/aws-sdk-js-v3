import { DescribeTasksInput } from "../shapes/DescribeTasksInput";
import { DescribeTasksOutput } from "../shapes/DescribeTasksOutput";
import { ServerException } from "../shapes/ServerException";
import { ClientException } from "../shapes/ClientException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ClusterNotFoundException } from "../shapes/ClusterNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeTasks: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeTasks",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeTasksInput
  },
  output: {
    shape: DescribeTasksOutput
  },
  errors: [
    {
      shape: ServerException
    },
    {
      shape: ClientException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: ClusterNotFoundException
    }
  ]
};
