import { UpdateTriggerInput } from "../shapes/UpdateTriggerInput";
import { UpdateTriggerOutput } from "../shapes/UpdateTriggerOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateTrigger: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateTrigger",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateTriggerInput
  },
  output: {
    shape: UpdateTriggerOutput
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
