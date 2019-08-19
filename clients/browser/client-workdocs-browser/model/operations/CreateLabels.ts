import { CreateLabelsInput } from "../shapes/CreateLabelsInput";
import { CreateLabelsOutput } from "../shapes/CreateLabelsOutput";
import { EntityNotExistsException } from "../shapes/EntityNotExistsException";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "../shapes/UnauthorizedResourceAccessException";
import { FailedDependencyException } from "../shapes/FailedDependencyException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { TooManyLabelsException } from "../shapes/TooManyLabelsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
