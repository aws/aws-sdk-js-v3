import { ListStackInstancesForProvisionedProductInput } from "../shapes/ListStackInstancesForProvisionedProductInput";
import { ListStackInstancesForProvisionedProductOutput } from "../shapes/ListStackInstancesForProvisionedProductOutput";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListStackInstancesForProvisionedProduct: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListStackInstancesForProvisionedProduct",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListStackInstancesForProvisionedProductInput
  },
  output: {
    shape: ListStackInstancesForProvisionedProductOutput
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
