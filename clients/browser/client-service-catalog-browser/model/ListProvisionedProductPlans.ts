import { ListProvisionedProductPlansInput } from "./ListProvisionedProductPlansInput";
import { ListProvisionedProductPlansOutput } from "./ListProvisionedProductPlansOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParametersException } from "./InvalidParametersException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
