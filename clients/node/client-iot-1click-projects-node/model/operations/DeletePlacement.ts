import { DeletePlacementInput } from "../shapes/DeletePlacementInput";
import { DeletePlacementOutput } from "../shapes/DeletePlacementOutput";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeletePlacement: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeletePlacement",
  http: {
    method: "DELETE",
    requestUri: "/projects/{projectName}/placements/{placementName}"
  },
  input: {
    shape: DeletePlacementInput
  },
  output: {
    shape: DeletePlacementOutput
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
