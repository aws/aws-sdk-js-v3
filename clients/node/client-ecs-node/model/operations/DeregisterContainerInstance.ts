import { DeregisterContainerInstanceInput } from "../shapes/DeregisterContainerInstanceInput";
import { DeregisterContainerInstanceOutput } from "../shapes/DeregisterContainerInstanceOutput";
import { ServerException } from "../shapes/ServerException";
import { ClientException } from "../shapes/ClientException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ClusterNotFoundException } from "../shapes/ClusterNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeregisterContainerInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeregisterContainerInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeregisterContainerInstanceInput
  },
  output: {
    shape: DeregisterContainerInstanceOutput
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
