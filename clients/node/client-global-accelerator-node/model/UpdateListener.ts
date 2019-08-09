import { UpdateListenerInput } from "./UpdateListenerInput";
import { UpdateListenerOutput } from "./UpdateListenerOutput";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { InvalidPortRangeException } from "./InvalidPortRangeException";
import { ListenerNotFoundException } from "./ListenerNotFoundException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
