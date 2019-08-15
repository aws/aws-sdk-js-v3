import { ListSatellitesInput } from "../shapes/ListSatellitesInput";
import { ListSatellitesOutput } from "../shapes/ListSatellitesOutput";
import { DependencyException } from "../shapes/DependencyException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListSatellites: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListSatellites",
  http: {
    method: "GET",
    requestUri: "/satellite"
  },
  input: {
    shape: ListSatellitesInput
  },
  output: {
    shape: ListSatellitesOutput
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
