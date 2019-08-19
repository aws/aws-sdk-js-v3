import { ListGroundStationsInput } from "../shapes/ListGroundStationsInput";
import { ListGroundStationsOutput } from "../shapes/ListGroundStationsOutput";
import { DependencyException } from "../shapes/DependencyException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListGroundStations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListGroundStations",
  http: {
    method: "GET",
    requestUri: "/groundstation"
  },
  input: {
    shape: ListGroundStationsInput
  },
  output: {
    shape: ListGroundStationsOutput
  },
  errors: [
    {
      shape: DependencyException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
