import { CreateListenerInput } from "./CreateListenerInput";
import { CreateListenerOutput } from "./CreateListenerOutput";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { AcceleratorNotFoundException } from "./AcceleratorNotFoundException";
import { InvalidPortRangeException } from "./InvalidPortRangeException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateListener: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateListener",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateListenerInput
  },
  output: {
    shape: CreateListenerOutput
  },
  errors: [
    {
      shape: InvalidArgumentException
    },
    {
      shape: AcceleratorNotFoundException
    },
    {
      shape: InvalidPortRangeException
    },
    {
      shape: InternalServiceErrorException
    },
    {
      shape: LimitExceededException
    }
  ]
};
