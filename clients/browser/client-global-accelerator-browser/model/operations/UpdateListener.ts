import { UpdateListenerInput } from "../shapes/UpdateListenerInput";
import { UpdateListenerOutput } from "../shapes/UpdateListenerOutput";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { InvalidPortRangeException } from "../shapes/InvalidPortRangeException";
import { ListenerNotFoundException } from "../shapes/ListenerNotFoundException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateListener: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateListener",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateListenerInput
  },
  output: {
    shape: UpdateListenerOutput
  },
  errors: [
    {
      shape: InvalidArgumentException
    },
    {
      shape: InvalidPortRangeException
    },
    {
      shape: ListenerNotFoundException
    },
    {
      shape: InternalServiceErrorException
    },
    {
      shape: LimitExceededException
    }
  ]
};
