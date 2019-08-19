import { CreateFolderInput } from "../shapes/CreateFolderInput";
import { CreateFolderOutput } from "../shapes/CreateFolderOutput";
import { EntityNotExistsException } from "../shapes/EntityNotExistsException";
import { EntityAlreadyExistsException } from "../shapes/EntityAlreadyExistsException";
import { ProhibitedStateException } from "../shapes/ProhibitedStateException";
import { ConflictingOperationException } from "../shapes/ConflictingOperationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "../shapes/UnauthorizedResourceAccessException";
import { FailedDependencyException } from "../shapes/FailedDependencyException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateFolder: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateFolder",
  http: {
    method: "POST",
    requestUri: "/api/v1/folders"
  },
  input: {
    shape: CreateFolderInput
  },
  output: {
    shape: CreateFolderOutput
  },
  errors: [
    {
      shape: EntityNotExistsException
    },
    {
      shape: EntityAlreadyExistsException
    },
    {
      shape: ProhibitedStateException
    },
    {
      shape: ConflictingOperationException
    },
    {
      shape: LimitExceededException
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
    }
  ]
};
