import { DescribeEventSourceInput } from "./DescribeEventSourceInput";
import { DescribeEventSourceOutput } from "./DescribeEventSourceOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalException } from "./InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeEventSource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeEventSource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeEventSourceInput
  },
  output: {
    shape: DescribeEventSourceOutput
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
