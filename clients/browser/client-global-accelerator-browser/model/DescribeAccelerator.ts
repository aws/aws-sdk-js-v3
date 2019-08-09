import { DescribeAcceleratorInput } from "./DescribeAcceleratorInput";
import { DescribeAcceleratorOutput } from "./DescribeAcceleratorOutput";
import { AcceleratorNotFoundException } from "./AcceleratorNotFoundException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
