import { UpdateAcceleratorInput } from "../shapes/UpdateAcceleratorInput";
import { UpdateAcceleratorOutput } from "../shapes/UpdateAcceleratorOutput";
import { AcceleratorNotFoundException } from "../shapes/AcceleratorNotFoundException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
