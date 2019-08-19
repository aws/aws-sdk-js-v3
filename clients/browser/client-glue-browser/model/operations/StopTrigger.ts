import { StopTriggerInput } from "../shapes/StopTriggerInput";
import { StopTriggerOutput } from "../shapes/StopTriggerOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StopTrigger: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopTrigger",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopTriggerInput
  },
  output: {
    shape: StopTriggerOutput
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
      shape: ConcurrentModificationException
    }
  ]
};
