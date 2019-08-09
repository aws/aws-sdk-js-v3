import { DescribeTasksInput } from "./DescribeTasksInput";
import { DescribeTasksOutput } from "./DescribeTasksOutput";
import { ServerException } from "./ServerException";
import { ClientException } from "./ClientException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClusterNotFoundException } from "./ClusterNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
