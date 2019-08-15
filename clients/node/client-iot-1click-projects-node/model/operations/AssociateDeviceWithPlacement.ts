import { AssociateDeviceWithPlacementInput } from "../shapes/AssociateDeviceWithPlacementInput";
import { AssociateDeviceWithPlacementOutput } from "../shapes/AssociateDeviceWithPlacementOutput";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceConflictException } from "../shapes/ResourceConflictException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AssociateDeviceWithPlacement: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateDeviceWithPlacement",
  http: {
    method: "PUT",
    requestUri:
      "/projects/{projectName}/placements/{placementName}/devices/{deviceTemplateName}"
  },
  input: {
    shape: AssociateDeviceWithPlacementInput
  },
  output: {
    shape: AssociateDeviceWithPlacementOutput
  },
  errors: [
    {
      shape: InternalFailureException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceConflictException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
