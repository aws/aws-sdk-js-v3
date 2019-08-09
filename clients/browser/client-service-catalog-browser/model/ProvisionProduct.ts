import { ProvisionProductInput } from "./ProvisionProductInput";
import { ProvisionProductOutput } from "./ProvisionProductOutput";
import { InvalidParametersException } from "./InvalidParametersException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { DuplicateResourceException } from "./DuplicateResourceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
