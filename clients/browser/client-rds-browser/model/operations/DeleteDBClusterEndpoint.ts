import { DeleteDBClusterEndpointInput } from "../shapes/DeleteDBClusterEndpointInput";
import { DeleteDBClusterEndpointOutput } from "../shapes/DeleteDBClusterEndpointOutput";
import { InvalidDBClusterEndpointStateFault } from "../shapes/InvalidDBClusterEndpointStateFault";
import { DBClusterEndpointNotFoundFault } from "../shapes/DBClusterEndpointNotFoundFault";
import { InvalidDBClusterStateFault } from "../shapes/InvalidDBClusterStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
