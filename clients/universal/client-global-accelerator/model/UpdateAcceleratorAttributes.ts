import { UpdateAcceleratorAttributesInput } from "./UpdateAcceleratorAttributesInput";
import { UpdateAcceleratorAttributesOutput } from "./UpdateAcceleratorAttributesOutput";
import { AcceleratorNotFoundException } from "./AcceleratorNotFoundException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
