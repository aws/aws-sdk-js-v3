import { DescribeAcceleratorInput } from "../shapes/DescribeAcceleratorInput";
import { DescribeAcceleratorOutput } from "../shapes/DescribeAcceleratorOutput";
import { AcceleratorNotFoundException } from "../shapes/AcceleratorNotFoundException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeAccelerator: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeAccelerator",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeAcceleratorInput
  },
  output: {
    shape: DescribeAcceleratorOutput
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
