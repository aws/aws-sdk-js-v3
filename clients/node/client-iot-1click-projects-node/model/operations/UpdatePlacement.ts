import { UpdatePlacementInput } from "../shapes/UpdatePlacementInput";
import { UpdatePlacementOutput } from "../shapes/UpdatePlacementOutput";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdatePlacement: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdatePlacement",
  http: {
    method: "PUT",
    requestUri: "/projects/{projectName}/placements/{placementName}"
  },
  input: {
    shape: UpdatePlacementInput
  },
  output: {
    shape: UpdatePlacementOutput
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
