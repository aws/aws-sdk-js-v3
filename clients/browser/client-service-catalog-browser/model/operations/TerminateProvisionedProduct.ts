import { TerminateProvisionedProductInput } from "../shapes/TerminateProvisionedProductInput";
import { TerminateProvisionedProductOutput } from "../shapes/TerminateProvisionedProductOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const TerminateProvisionedProduct: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TerminateProvisionedProduct",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: TerminateProvisionedProductInput
  },
  output: {
    shape: TerminateProvisionedProductOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    }
  ]
};
