import { ListGroundStationsInput } from "./ListGroundStationsInput";
import { ListGroundStationsOutput } from "./ListGroundStationsOutput";
import { DependencyException } from "./DependencyException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
