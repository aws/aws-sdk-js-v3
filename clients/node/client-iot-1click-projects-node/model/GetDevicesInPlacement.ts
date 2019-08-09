import { GetDevicesInPlacementInput } from "./GetDevicesInPlacementInput";
import { GetDevicesInPlacementOutput } from "./GetDevicesInPlacementOutput";
import { InternalFailureException } from "./InternalFailureException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
