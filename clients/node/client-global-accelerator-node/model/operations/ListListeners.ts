import { ListListenersInput } from "../shapes/ListListenersInput";
import { ListListenersOutput } from "../shapes/ListListenersOutput";
import { AcceleratorNotFoundException } from "../shapes/AcceleratorNotFoundException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
