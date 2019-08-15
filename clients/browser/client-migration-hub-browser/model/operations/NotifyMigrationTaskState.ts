import { NotifyMigrationTaskStateInput } from "../shapes/NotifyMigrationTaskStateInput";
import { NotifyMigrationTaskStateOutput } from "../shapes/NotifyMigrationTaskStateOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InternalServerError } from "../shapes/InternalServerError";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { DryRunOperation } from "../shapes/DryRunOperation";
import { UnauthorizedOperation } from "../shapes/UnauthorizedOperation";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const NotifyMigrationTaskState: _Operation_ = {
  metadata: ServiceMetadata,
  name: "NotifyMigrationTaskState",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: NotifyMigrationTaskStateInput
  },
  output: {
    shape: NotifyMigrationTaskStateOutput
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
      shape: DryRunOperation
    },
    {
      shape: UnauthorizedOperation
    },
    {
      shape: InvalidInputException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
