import { StartTriggerInput } from "./StartTriggerInput";
import { StartTriggerOutput } from "./StartTriggerOutput";
import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { ResourceNumberLimitExceededException } from "./ResourceNumberLimitExceededException";
import { ConcurrentRunsExceededException } from "./ConcurrentRunsExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
