import { DeleteListenerInput } from "../shapes/DeleteListenerInput";
import { DeleteListenerOutput } from "../shapes/DeleteListenerOutput";
import { ListenerNotFoundException } from "../shapes/ListenerNotFoundException";
import { AssociatedEndpointGroupFoundException } from "../shapes/AssociatedEndpointGroupFoundException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteListener: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteListener",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteListenerInput
  },
  output: {
    shape: DeleteListenerOutput
  },
  errors: [
    {
      shape: ListenerNotFoundException
    },
    {
      shape: AssociatedEndpointGroupFoundException
    },
    {
      shape: InternalServiceErrorException
    }
  ]
};
