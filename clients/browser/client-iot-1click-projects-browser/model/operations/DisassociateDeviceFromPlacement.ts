import { DisassociateDeviceFromPlacementInput } from "../shapes/DisassociateDeviceFromPlacementInput";
import { DisassociateDeviceFromPlacementOutput } from "../shapes/DisassociateDeviceFromPlacementOutput";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisassociateDeviceFromPlacement: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateDeviceFromPlacement",
  http: {
    method: "DELETE",
    requestUri:
      "/projects/{projectName}/placements/{placementName}/devices/{deviceTemplateName}"
  },
  input: {
    shape: DisassociateDeviceFromPlacementInput
  },
  output: {
    shape: DisassociateDeviceFromPlacementOutput
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
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
