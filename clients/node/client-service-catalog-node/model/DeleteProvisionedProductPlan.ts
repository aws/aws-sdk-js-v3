import { DeleteProvisionedProductPlanInput } from "./DeleteProvisionedProductPlanInput";
import { DeleteProvisionedProductPlanOutput } from "./DeleteProvisionedProductPlanOutput";
import { InvalidParametersException } from "./InvalidParametersException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteProvisionedProductPlan: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteProvisionedProductPlan",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteProvisionedProductPlanInput
  },
  output: {
    shape: DeleteProvisionedProductPlanOutput
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
