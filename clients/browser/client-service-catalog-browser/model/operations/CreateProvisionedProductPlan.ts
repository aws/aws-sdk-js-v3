import { CreateProvisionedProductPlanInput } from "../shapes/CreateProvisionedProductPlanInput";
import { CreateProvisionedProductPlanOutput } from "../shapes/CreateProvisionedProductPlanOutput";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidStateException } from "../shapes/InvalidStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateProvisionedProductPlan: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateProvisionedProductPlan",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateProvisionedProductPlanInput
  },
  output: {
    shape: CreateProvisionedProductPlanOutput
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
