import { UpdateProvisionedProductPropertiesInput } from "./UpdateProvisionedProductPropertiesInput";
import { UpdateProvisionedProductPropertiesOutput } from "./UpdateProvisionedProductPropertiesOutput";
import { InvalidParametersException } from "./InvalidParametersException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidStateException } from "./InvalidStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
