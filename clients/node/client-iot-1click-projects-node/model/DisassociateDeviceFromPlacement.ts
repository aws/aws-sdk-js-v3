import { DisassociateDeviceFromPlacementInput } from "./DisassociateDeviceFromPlacementInput";
import { DisassociateDeviceFromPlacementOutput } from "./DisassociateDeviceFromPlacementOutput";
import { InternalFailureException } from "./InternalFailureException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
