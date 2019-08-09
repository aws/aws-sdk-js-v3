import { DescribeProvisionedProductPlanInput } from "./DescribeProvisionedProductPlanInput";
import { DescribeProvisionedProductPlanOutput } from "./DescribeProvisionedProductPlanOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParametersException } from "./InvalidParametersException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeProvisionedProductPlan: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeProvisionedProductPlan",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeProvisionedProductPlanInput
  },
  output: {
    shape: DescribeProvisionedProductPlanOutput
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
