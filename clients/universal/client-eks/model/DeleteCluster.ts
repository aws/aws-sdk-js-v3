import { DeleteClusterInput } from "./DeleteClusterInput";
import { DeleteClusterOutput } from "./DeleteClusterOutput";
import { ResourceInUseException } from "./ResourceInUseException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ClientException } from "./ClientException";
import { ServerException } from "./ServerException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteCluster: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteCluster",
  http: {
    method: "DELETE",
    requestUri: "/clusters/{name}"
  },
  input: {
    shape: DeleteClusterInput
  },
  output: {
    shape: DeleteClusterOutput
  },
  errors: [
    {
      shape: ResourceInUseException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ClientException
    },
    {
      shape: ServerException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
