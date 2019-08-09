import { UpdateTriggerInput } from "./UpdateTriggerInput";
import { UpdateTriggerOutput } from "./UpdateTriggerOutput";
import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
