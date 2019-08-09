import { UpdateProvisionedProductInput } from "./UpdateProvisionedProductInput";
import { UpdateProvisionedProductOutput } from "./UpdateProvisionedProductOutput";
import { InvalidParametersException } from "./InvalidParametersException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
