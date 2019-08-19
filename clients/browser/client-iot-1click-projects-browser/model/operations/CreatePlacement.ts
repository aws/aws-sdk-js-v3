import { CreatePlacementInput } from "../shapes/CreatePlacementInput";
import { CreatePlacementOutput } from "../shapes/CreatePlacementOutput";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceConflictException } from "../shapes/ResourceConflictException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreatePlacement: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreatePlacement",
  http: {
    method: "POST",
    requestUri: "/projects/{projectName}/placements"
  },
  input: {
    shape: CreatePlacementInput
  },
  output: {
    shape: CreatePlacementOutput
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
