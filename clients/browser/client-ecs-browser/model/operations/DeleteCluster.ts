import { DeleteClusterInput } from "../shapes/DeleteClusterInput";
import { DeleteClusterOutput } from "../shapes/DeleteClusterOutput";
import { ServerException } from "../shapes/ServerException";
import { ClientException } from "../shapes/ClientException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ClusterNotFoundException } from "../shapes/ClusterNotFoundException";
import { ClusterContainsContainerInstancesException } from "../shapes/ClusterContainsContainerInstancesException";
import { ClusterContainsServicesException } from "../shapes/ClusterContainsServicesException";
import { ClusterContainsTasksException } from "../shapes/ClusterContainsTasksException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteCluster: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteCluster",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteClusterInput
  },
  output: {
    shape: DeleteClusterOutput
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
      shape: ClusterContainsContainerInstancesException
    },
    {
      shape: ClusterContainsServicesException
    },
    {
      shape: ClusterContainsTasksException
    }
  ]
};
