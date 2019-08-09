import { DescribeEventBusInput } from "./DescribeEventBusInput";
import { DescribeEventBusOutput } from "./DescribeEventBusOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalException } from "./InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
