import { CreatePlacementInput } from "./CreatePlacementInput";
import { CreatePlacementOutput } from "./CreatePlacementOutput";
import { InternalFailureException } from "./InternalFailureException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceConflictException } from "./ResourceConflictException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
