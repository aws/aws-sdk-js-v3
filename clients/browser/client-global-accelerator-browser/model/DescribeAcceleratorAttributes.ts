import { DescribeAcceleratorAttributesInput } from "./DescribeAcceleratorAttributesInput";
import { DescribeAcceleratorAttributesOutput } from "./DescribeAcceleratorAttributesOutput";
import { AcceleratorNotFoundException } from "./AcceleratorNotFoundException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
