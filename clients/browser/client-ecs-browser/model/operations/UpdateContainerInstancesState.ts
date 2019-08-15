import { UpdateContainerInstancesStateInput } from "../shapes/UpdateContainerInstancesStateInput";
import { UpdateContainerInstancesStateOutput } from "../shapes/UpdateContainerInstancesStateOutput";
import { ServerException } from "../shapes/ServerException";
import { ClientException } from "../shapes/ClientException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ClusterNotFoundException } from "../shapes/ClusterNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateContainerInstancesState: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateContainerInstancesState",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateContainerInstancesStateInput
  },
  output: {
    shape: UpdateContainerInstancesStateOutput
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
