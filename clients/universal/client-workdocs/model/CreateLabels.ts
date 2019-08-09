import { CreateLabelsInput } from "./CreateLabelsInput";
import { CreateLabelsOutput } from "./CreateLabelsOutput";
import { EntityNotExistsException } from "./EntityNotExistsException";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { FailedDependencyException } from "./FailedDependencyException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyLabelsException } from "./TooManyLabelsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateLabels: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateLabels",
  http: {
    method: "PUT",
    requestUri: "/api/v1/resources/{ResourceId}/labels"
  },
  input: {
    shape: CreateLabelsInput
  },
  output: {
    shape: CreateLabelsOutput
  },
  errors: [
    {
      shape: EntityNotExistsException
    },
    {
      shape: UnauthorizedOperationException
    },
    {
      shape: UnauthorizedResourceAccessException
    },
    {
      shape: FailedDependencyException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: TooManyLabelsException
    }
  ]
};
