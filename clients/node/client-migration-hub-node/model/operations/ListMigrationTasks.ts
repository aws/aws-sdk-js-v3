import { ListMigrationTasksInput } from "../shapes/ListMigrationTasksInput";
import { ListMigrationTasksOutput } from "../shapes/ListMigrationTasksOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InternalServerError } from "../shapes/InternalServerError";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { PolicyErrorException } from "../shapes/PolicyErrorException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
