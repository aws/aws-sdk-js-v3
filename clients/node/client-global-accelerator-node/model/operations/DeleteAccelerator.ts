import { DeleteAcceleratorInput } from "../shapes/DeleteAcceleratorInput";
import { DeleteAcceleratorOutput } from "../shapes/DeleteAcceleratorOutput";
import { AcceleratorNotFoundException } from "../shapes/AcceleratorNotFoundException";
import { AcceleratorNotDisabledException } from "../shapes/AcceleratorNotDisabledException";
import { AssociatedListenerFoundException } from "../shapes/AssociatedListenerFoundException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
