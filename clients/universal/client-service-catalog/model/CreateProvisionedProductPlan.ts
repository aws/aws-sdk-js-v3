import { CreateProvisionedProductPlanInput } from "./CreateProvisionedProductPlanInput";
import { CreateProvisionedProductPlanOutput } from "./CreateProvisionedProductPlanOutput";
import { InvalidParametersException } from "./InvalidParametersException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidStateException } from "./InvalidStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
