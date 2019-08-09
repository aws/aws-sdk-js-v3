import { CreateTriggerInput } from "./CreateTriggerInput";
import { CreateTriggerOutput } from "./CreateTriggerOutput";
import { AlreadyExistsException } from "./AlreadyExistsException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InvalidInputException } from "./InvalidInputException";
import { IdempotentParameterMismatchException } from "./IdempotentParameterMismatchException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { ResourceNumberLimitExceededException } from "./ResourceNumberLimitExceededException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateTrigger: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateTrigger",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateTriggerInput
  },
  output: {
    shape: CreateTriggerOutput
  },
  errors: [
    {
      shape: AlreadyExistsException
    },
    {
      shape: EntityNotFoundException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: IdempotentParameterMismatchException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: OperationTimeoutException
    },
    {
      shape: ResourceNumberLimitExceededException
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};
