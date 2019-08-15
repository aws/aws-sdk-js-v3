import { ListTasksInput } from "../shapes/ListTasksInput";
import { ListTasksOutput } from "../shapes/ListTasksOutput";
import { ServerException } from "../shapes/ServerException";
import { ClientException } from "../shapes/ClientException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ClusterNotFoundException } from "../shapes/ClusterNotFoundException";
import { ServiceNotFoundException } from "../shapes/ServiceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListTasks: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTasks",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListTasksInput
  },
  output: {
    shape: ListTasksOutput
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
    },
    {
      shape: ServiceNotFoundException
    }
  ]
};
