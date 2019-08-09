import { PutScheduledActionInput } from "./PutScheduledActionInput";
import { PutScheduledActionOutput } from "./PutScheduledActionOutput";
import { ValidationException } from "./ValidationException";
import { LimitExceededException } from "./LimitExceededException";
import { ObjectNotFoundException } from "./ObjectNotFoundException";
import { ConcurrentUpdateException } from "./ConcurrentUpdateException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
