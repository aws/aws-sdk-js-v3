import { DescribeProvisionedProductInput } from "../shapes/DescribeProvisionedProductInput";
import { DescribeProvisionedProductOutput } from "../shapes/DescribeProvisionedProductOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeProvisionedProduct: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeProvisionedProduct",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeProvisionedProductInput
  },
  output: {
    shape: DescribeProvisionedProductOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    }
  ]
};
