import { PutScheduledActionInput } from "../shapes/PutScheduledActionInput";
import { PutScheduledActionOutput } from "../shapes/PutScheduledActionOutput";
import { ValidationException } from "../shapes/ValidationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ObjectNotFoundException } from "../shapes/ObjectNotFoundException";
import { ConcurrentUpdateException } from "../shapes/ConcurrentUpdateException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutScheduledAction: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutScheduledAction",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutScheduledActionInput
  },
  output: {
    shape: PutScheduledActionOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: LimitExceededException
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
