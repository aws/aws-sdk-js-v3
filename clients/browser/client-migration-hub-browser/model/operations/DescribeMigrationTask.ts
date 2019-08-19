import { DescribeMigrationTaskInput } from "../shapes/DescribeMigrationTaskInput";
import { DescribeMigrationTaskOutput } from "../shapes/DescribeMigrationTaskOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InternalServerError } from "../shapes/InternalServerError";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
