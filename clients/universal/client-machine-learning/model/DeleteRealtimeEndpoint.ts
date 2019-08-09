import { DeleteRealtimeEndpointInput } from "./DeleteRealtimeEndpointInput";
import { DeleteRealtimeEndpointOutput } from "./DeleteRealtimeEndpointOutput";
import { InvalidInputException } from "./InvalidInputException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
