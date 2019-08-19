import { DeleteScheduledActionInput } from "../shapes/DeleteScheduledActionInput";
import { DeleteScheduledActionOutput } from "../shapes/DeleteScheduledActionOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ObjectNotFoundException } from "../shapes/ObjectNotFoundException";
import { ConcurrentUpdateException } from "../shapes/ConcurrentUpdateException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
