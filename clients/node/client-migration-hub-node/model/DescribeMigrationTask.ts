import { DescribeMigrationTaskInput } from "./DescribeMigrationTaskInput";
import { DescribeMigrationTaskOutput } from "./DescribeMigrationTaskOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServerError } from "./InternalServerError";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InvalidInputException } from "./InvalidInputException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeMigrationTask: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeMigrationTask",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeMigrationTaskInput
  },
  output: {
    shape: DescribeMigrationTaskOutput
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
      shape: ResourceNotFoundException
    }
  ]
};
