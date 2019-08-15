import { GetSatelliteInput } from "../shapes/GetSatelliteInput";
import { GetSatelliteOutput } from "../shapes/GetSatelliteOutput";
import { DependencyException } from "../shapes/DependencyException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetSatellite: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetSatellite",
  http: {
    method: "GET",
    requestUri: "/satellite/{satelliteId}"
  },
  input: {
    shape: GetSatelliteInput
  },
  output: {
    shape: GetSatelliteOutput
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
