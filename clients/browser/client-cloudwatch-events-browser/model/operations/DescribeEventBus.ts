import { DescribeEventBusInput } from "../shapes/DescribeEventBusInput";
import { DescribeEventBusOutput } from "../shapes/DescribeEventBusOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalException } from "../shapes/InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeEventBus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeEventBus",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeEventBusInput
  },
  output: {
    shape: DescribeEventBusOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalException
    }
  ]
};
