import { UpdateProvisionedProductInput } from "../shapes/UpdateProvisionedProductInput";
import { UpdateProvisionedProductOutput } from "../shapes/UpdateProvisionedProductOutput";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateProvisionedProduct: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateProvisionedProduct",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateProvisionedProductInput
  },
  output: {
    shape: UpdateProvisionedProductOutput
  },
  errors: [
    {
      shape: InvalidParametersException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
