import { DeleteEndpointInput } from "../shapes/DeleteEndpointInput";
import { DeleteEndpointOutput } from "../shapes/DeleteEndpointOutput";
import { ResourceNotFoundFault } from "../shapes/ResourceNotFoundFault";
import { InvalidResourceStateFault } from "../shapes/InvalidResourceStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteEndpoint: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteEndpoint",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteEndpointInput
  },
  output: {
    shape: DeleteEndpointOutput
  },
  errors: [
    {
      shape: ResourceNotFoundFault
    },
    {
      shape: InvalidResourceStateFault
    }
  ]
};
