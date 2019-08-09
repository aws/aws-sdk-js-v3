import { DeleteAcceleratorInput } from "./DeleteAcceleratorInput";
import { DeleteAcceleratorOutput } from "./DeleteAcceleratorOutput";
import { AcceleratorNotFoundException } from "./AcceleratorNotFoundException";
import { AcceleratorNotDisabledException } from "./AcceleratorNotDisabledException";
import { AssociatedListenerFoundException } from "./AssociatedListenerFoundException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteAccelerator: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteAccelerator",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteAcceleratorInput
  },
  output: {
    shape: DeleteAcceleratorOutput
  },
  errors: [
    {
      shape: AcceleratorNotFoundException
    },
    {
      shape: AcceleratorNotDisabledException
    },
    {
      shape: AssociatedListenerFoundException
    },
    {
      shape: InternalServiceErrorException
    },
    {
      shape: InvalidArgumentException
    }
  ]
};
