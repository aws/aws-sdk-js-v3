import { ProvisionProductInput } from "../shapes/ProvisionProductInput";
import { ProvisionProductOutput } from "../shapes/ProvisionProductOutput";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { DuplicateResourceException } from "../shapes/DuplicateResourceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ProvisionProduct: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ProvisionProduct",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ProvisionProductInput
  },
  output: {
    shape: ProvisionProductOutput
  },
  errors: [
    {
      shape: InvalidParametersException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: DuplicateResourceException
    }
  ]
};
