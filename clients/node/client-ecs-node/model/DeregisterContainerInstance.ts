import { DeregisterContainerInstanceInput } from "./DeregisterContainerInstanceInput";
import { DeregisterContainerInstanceOutput } from "./DeregisterContainerInstanceOutput";
import { ServerException } from "./ServerException";
import { ClientException } from "./ClientException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClusterNotFoundException } from "./ClusterNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
