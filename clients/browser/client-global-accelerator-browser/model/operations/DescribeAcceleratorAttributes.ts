import { DescribeAcceleratorAttributesInput } from "../shapes/DescribeAcceleratorAttributesInput";
import { DescribeAcceleratorAttributesOutput } from "../shapes/DescribeAcceleratorAttributesOutput";
import { AcceleratorNotFoundException } from "../shapes/AcceleratorNotFoundException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeAcceleratorAttributes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeAcceleratorAttributes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeAcceleratorAttributesInput
  },
  output: {
    shape: DescribeAcceleratorAttributesOutput
  },
  errors: [
    {
      shape: AcceleratorNotFoundException
    },
    {
      shape: InternalServiceErrorException
    },
    {
      shape: InvalidArgumentException
    }
  ]
};
