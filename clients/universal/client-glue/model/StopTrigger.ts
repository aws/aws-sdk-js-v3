import { StopTriggerInput } from "./StopTriggerInput";
import { StopTriggerOutput } from "./StopTriggerOutput";
import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
