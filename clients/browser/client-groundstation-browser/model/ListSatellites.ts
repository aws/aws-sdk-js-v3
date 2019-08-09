import { ListSatellitesInput } from "./ListSatellitesInput";
import { ListSatellitesOutput } from "./ListSatellitesOutput";
import { DependencyException } from "./DependencyException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
