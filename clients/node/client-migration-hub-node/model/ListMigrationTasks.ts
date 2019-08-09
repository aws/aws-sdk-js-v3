import { ListMigrationTasksInput } from "./ListMigrationTasksInput";
import { ListMigrationTasksOutput } from "./ListMigrationTasksOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServerError } from "./InternalServerError";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InvalidInputException } from "./InvalidInputException";
import { PolicyErrorException } from "./PolicyErrorException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListMigrationTasks: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListMigrationTasks",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListMigrationTasksInput
  },
  output: {
    shape: ListMigrationTasksOutput
  },
  errors: [
    {
      shape: AccessDeniedException
    },
    {
      shape: InternalServerError
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: PolicyErrorException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
