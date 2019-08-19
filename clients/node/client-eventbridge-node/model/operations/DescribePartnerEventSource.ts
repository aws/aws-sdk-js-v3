import { DescribePartnerEventSourceInput } from "../shapes/DescribePartnerEventSourceInput";
import { DescribePartnerEventSourceOutput } from "../shapes/DescribePartnerEventSourceOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalException } from "../shapes/InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
