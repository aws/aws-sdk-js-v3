import { UpdateProvisionedProductPropertiesInput } from "../shapes/UpdateProvisionedProductPropertiesInput";
import { UpdateProvisionedProductPropertiesOutput } from "../shapes/UpdateProvisionedProductPropertiesOutput";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidStateException } from "../shapes/InvalidStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateProvisionedProductProperties: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateProvisionedProductProperties",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateProvisionedProductPropertiesInput
  },
  output: {
    shape: UpdateProvisionedProductPropertiesOutput
  },
  errors: [
    {
      shape: InvalidParametersException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidStateException
    }
  ]
};
