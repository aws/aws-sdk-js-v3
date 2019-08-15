import { ListContainerInstancesInput } from "../shapes/ListContainerInstancesInput";
import { ListContainerInstancesOutput } from "../shapes/ListContainerInstancesOutput";
import { ServerException } from "../shapes/ServerException";
import { ClientException } from "../shapes/ClientException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ClusterNotFoundException } from "../shapes/ClusterNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
