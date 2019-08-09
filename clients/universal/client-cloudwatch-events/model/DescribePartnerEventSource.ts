import { DescribePartnerEventSourceInput } from "./DescribePartnerEventSourceInput";
import { DescribePartnerEventSourceOutput } from "./DescribePartnerEventSourceOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalException } from "./InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribePartnerEventSource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribePartnerEventSource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribePartnerEventSourceInput
  },
  output: {
    shape: DescribePartnerEventSourceOutput
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
