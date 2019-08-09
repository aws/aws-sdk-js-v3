import { UpdateAcceleratorInput } from "./UpdateAcceleratorInput";
import { UpdateAcceleratorOutput } from "./UpdateAcceleratorOutput";
import { AcceleratorNotFoundException } from "./AcceleratorNotFoundException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateAccelerator: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateAccelerator",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateAcceleratorInput
  },
  output: {
    shape: UpdateAcceleratorOutput
  },
  errors: [
    {
      shape: AcceleratorNotFoundException
    },
    {
      shape: InternalServiceErrorException
    },
    {
      shape: InvalidArgumentException
    }
  ]
};
