import { CreateListenerInput } from "../shapes/CreateListenerInput";
import { CreateListenerOutput } from "../shapes/CreateListenerOutput";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { AcceleratorNotFoundException } from "../shapes/AcceleratorNotFoundException";
import { InvalidPortRangeException } from "../shapes/InvalidPortRangeException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
