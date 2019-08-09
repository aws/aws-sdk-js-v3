import { DeletePlacementInput } from "./DeletePlacementInput";
import { DeletePlacementOutput } from "./DeletePlacementOutput";
import { InternalFailureException } from "./InternalFailureException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
