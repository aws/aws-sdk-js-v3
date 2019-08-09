import { DeleteScheduledActionInput } from "./DeleteScheduledActionInput";
import { DeleteScheduledActionOutput } from "./DeleteScheduledActionOutput";
import { ValidationException } from "./ValidationException";
import { ObjectNotFoundException } from "./ObjectNotFoundException";
import { ConcurrentUpdateException } from "./ConcurrentUpdateException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteScheduledAction: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteScheduledAction",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteScheduledActionInput
  },
  output: {
    shape: DeleteScheduledActionOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: ObjectNotFoundException
    },
    {
      shape: ConcurrentUpdateException
    },
    {
      shape: InternalServiceException
    }
  ]
};
