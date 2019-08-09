import { ListPlacementsInput } from "./ListPlacementsInput";
import { ListPlacementsOutput } from "./ListPlacementsOutput";
import { InternalFailureException } from "./InternalFailureException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListPlacements: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListPlacements",
  http: {
    method: "GET",
    requestUri: "/projects/{projectName}/placements"
  },
  input: {
    shape: ListPlacementsInput
  },
  output: {
    shape: ListPlacementsOutput
  },
  errors: [
    {
      shape: InternalFailureException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
