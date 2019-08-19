import { GetDevicesInPlacementInput } from "../shapes/GetDevicesInPlacementInput";
import { GetDevicesInPlacementOutput } from "../shapes/GetDevicesInPlacementOutput";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetDevicesInPlacement: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDevicesInPlacement",
  http: {
    method: "GET",
    requestUri: "/projects/{projectName}/placements/{placementName}/devices"
  },
  input: {
    shape: GetDevicesInPlacementInput
  },
  output: {
    shape: GetDevicesInPlacementOutput
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
