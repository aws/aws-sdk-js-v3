import { StartTriggerInput } from "../shapes/StartTriggerInput";
import { StartTriggerOutput } from "../shapes/StartTriggerOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { ResourceNumberLimitExceededException } from "../shapes/ResourceNumberLimitExceededException";
import { ConcurrentRunsExceededException } from "../shapes/ConcurrentRunsExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartTrigger: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartTrigger",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartTriggerInput
  },
  output: {
    shape: StartTriggerOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: EntityNotFoundException
    },
    {
      shape: OperationTimeoutException
    },
    {
      shape: ResourceNumberLimitExceededException
    },
    {
      shape: ConcurrentRunsExceededException
    }
  ]
};
