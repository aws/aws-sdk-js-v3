import { CreateRealtimeEndpointInput } from "../shapes/CreateRealtimeEndpointInput";
import { CreateRealtimeEndpointOutput } from "../shapes/CreateRealtimeEndpointOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateRealtimeEndpoint: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateRealtimeEndpoint",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateRealtimeEndpointInput
  },
  output: {
    shape: CreateRealtimeEndpointOutput
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
