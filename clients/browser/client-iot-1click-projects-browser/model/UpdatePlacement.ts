import { UpdatePlacementInput } from "./UpdatePlacementInput";
import { UpdatePlacementOutput } from "./UpdatePlacementOutput";
import { InternalFailureException } from "./InternalFailureException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
