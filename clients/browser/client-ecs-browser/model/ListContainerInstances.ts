import { ListContainerInstancesInput } from "./ListContainerInstancesInput";
import { ListContainerInstancesOutput } from "./ListContainerInstancesOutput";
import { ServerException } from "./ServerException";
import { ClientException } from "./ClientException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClusterNotFoundException } from "./ClusterNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListContainerInstances: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListContainerInstances",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListContainerInstancesInput
  },
  output: {
    shape: ListContainerInstancesOutput
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
