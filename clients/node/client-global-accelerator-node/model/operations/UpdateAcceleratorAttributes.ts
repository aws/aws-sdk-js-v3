import { UpdateAcceleratorAttributesInput } from "../shapes/UpdateAcceleratorAttributesInput";
import { UpdateAcceleratorAttributesOutput } from "../shapes/UpdateAcceleratorAttributesOutput";
import { AcceleratorNotFoundException } from "../shapes/AcceleratorNotFoundException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateAcceleratorAttributes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateAcceleratorAttributes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateAcceleratorAttributesInput
  },
  output: {
    shape: UpdateAcceleratorAttributesOutput
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
