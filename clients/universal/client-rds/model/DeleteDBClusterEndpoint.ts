import { DeleteDBClusterEndpointInput } from "./DeleteDBClusterEndpointInput";
import { DeleteDBClusterEndpointOutput } from "./DeleteDBClusterEndpointOutput";
import { InvalidDBClusterEndpointStateFault } from "./InvalidDBClusterEndpointStateFault";
import { DBClusterEndpointNotFoundFault } from "./DBClusterEndpointNotFoundFault";
import { InvalidDBClusterStateFault } from "./InvalidDBClusterStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteDBClusterEndpoint: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDBClusterEndpoint",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteDBClusterEndpointInput
  },
  output: {
    shape: DeleteDBClusterEndpointOutput,
    resultWrapper: "DeleteDBClusterEndpointResult"
  },
  errors: [
    {
      shape: InvalidDBClusterEndpointStateFault
    },
    {
      shape: DBClusterEndpointNotFoundFault
    },
    {
      shape: InvalidDBClusterStateFault
    }
  ]
};
