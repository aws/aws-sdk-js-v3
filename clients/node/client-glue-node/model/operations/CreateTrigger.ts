import { CreateTriggerInput } from "../shapes/CreateTriggerInput";
import { CreateTriggerOutput } from "../shapes/CreateTriggerOutput";
import { AlreadyExistsException } from "../shapes/AlreadyExistsException";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { IdempotentParameterMismatchException } from "../shapes/IdempotentParameterMismatchException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { ResourceNumberLimitExceededException } from "../shapes/ResourceNumberLimitExceededException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
