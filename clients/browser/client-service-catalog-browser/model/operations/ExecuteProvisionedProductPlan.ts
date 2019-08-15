import { ExecuteProvisionedProductPlanInput } from "../shapes/ExecuteProvisionedProductPlanInput";
import { ExecuteProvisionedProductPlanOutput } from "../shapes/ExecuteProvisionedProductPlanOutput";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidStateException } from "../shapes/InvalidStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ExecuteProvisionedProductPlan: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ExecuteProvisionedProductPlan",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ExecuteProvisionedProductPlanInput
  },
  output: {
    shape: ExecuteProvisionedProductPlanOutput
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
