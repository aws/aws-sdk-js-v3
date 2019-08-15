import { CreateEventBusInput } from "../shapes/CreateEventBusInput";
import { CreateEventBusOutput } from "../shapes/CreateEventBusOutput";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidStateException } from "../shapes/InvalidStateException";
import { InternalException } from "../shapes/InternalException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
