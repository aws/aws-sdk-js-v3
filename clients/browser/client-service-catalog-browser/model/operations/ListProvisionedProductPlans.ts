import { ListProvisionedProductPlansInput } from "../shapes/ListProvisionedProductPlansInput";
import { ListProvisionedProductPlansOutput } from "../shapes/ListProvisionedProductPlansOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListProvisionedProductPlans: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListProvisionedProductPlans",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListProvisionedProductPlansInput
  },
  output: {
    shape: ListProvisionedProductPlansOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParametersException
    }
  ]
};
