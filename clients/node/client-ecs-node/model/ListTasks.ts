import { ListTasksInput } from "./ListTasksInput";
import { ListTasksOutput } from "./ListTasksOutput";
import { ServerException } from "./ServerException";
import { ClientException } from "./ClientException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClusterNotFoundException } from "./ClusterNotFoundException";
import { ServiceNotFoundException } from "./ServiceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
