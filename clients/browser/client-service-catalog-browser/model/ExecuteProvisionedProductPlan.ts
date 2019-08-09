import { ExecuteProvisionedProductPlanInput } from "./ExecuteProvisionedProductPlanInput";
import { ExecuteProvisionedProductPlanOutput } from "./ExecuteProvisionedProductPlanOutput";
import { InvalidParametersException } from "./InvalidParametersException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidStateException } from "./InvalidStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
