import { ListPlacementsInput } from "../shapes/ListPlacementsInput";
import { ListPlacementsOutput } from "../shapes/ListPlacementsOutput";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
