import { DeleteRealtimeEndpointInput } from "../shapes/DeleteRealtimeEndpointInput";
import { DeleteRealtimeEndpointOutput } from "../shapes/DeleteRealtimeEndpointOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteRealtimeEndpoint: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteRealtimeEndpoint",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteRealtimeEndpointInput
  },
  output: {
    shape: DeleteRealtimeEndpointOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalServerException
    }
  ]
};
