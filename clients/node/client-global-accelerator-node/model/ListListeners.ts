import { ListListenersInput } from "./ListListenersInput";
import { ListListenersOutput } from "./ListListenersOutput";
import { AcceleratorNotFoundException } from "./AcceleratorNotFoundException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListListeners: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListListeners",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListListenersInput
  },
  output: {
    shape: ListListenersOutput
  },
  errors: [
    {
      shape: AcceleratorNotFoundException
    },
    {
      shape: InvalidNextTokenException
    },
    {
      shape: InternalServiceErrorException
    }
  ]
};
