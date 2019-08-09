import { CreateEventBusInput } from "./CreateEventBusInput";
import { CreateEventBusOutput } from "./CreateEventBusOutput";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidStateException } from "./InvalidStateException";
import { InternalException } from "./InternalException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateEventBus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateEventBus",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateEventBusInput
  },
  output: {
    shape: CreateEventBusOutput
  },
  errors: [
    {
      shape: ResourceAlreadyExistsException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidStateException
    },
    {
      shape: InternalException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: LimitExceededException
    }
  ]
};
