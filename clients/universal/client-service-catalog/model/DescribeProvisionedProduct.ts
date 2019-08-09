import { DescribeProvisionedProductInput } from "./DescribeProvisionedProductInput";
import { DescribeProvisionedProductOutput } from "./DescribeProvisionedProductOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
