import { AssociateDeviceWithPlacementInput } from "./AssociateDeviceWithPlacementInput";
import { AssociateDeviceWithPlacementOutput } from "./AssociateDeviceWithPlacementOutput";
import { InternalFailureException } from "./InternalFailureException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceConflictException } from "./ResourceConflictException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
