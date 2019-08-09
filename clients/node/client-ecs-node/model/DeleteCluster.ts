import { DeleteClusterInput } from "./DeleteClusterInput";
import { DeleteClusterOutput } from "./DeleteClusterOutput";
import { ServerException } from "./ServerException";
import { ClientException } from "./ClientException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClusterNotFoundException } from "./ClusterNotFoundException";
import { ClusterContainsContainerInstancesException } from "./ClusterContainsContainerInstancesException";
import { ClusterContainsServicesException } from "./ClusterContainsServicesException";
import { ClusterContainsTasksException } from "./ClusterContainsTasksException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
