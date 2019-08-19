import { DescribeEndpointGroupInput } from "../shapes/DescribeEndpointGroupInput";
import { DescribeEndpointGroupOutput } from "../shapes/DescribeEndpointGroupOutput";
import { EndpointGroupNotFoundException } from "../shapes/EndpointGroupNotFoundException";
import { InternalServiceErrorException } from "../shapes/InternalServiceErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeEndpointGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeEndpointGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeEndpointGroupInput
  },
  output: {
    shape: DescribeEndpointGroupOutput
  },
  errors: [
    {
      shape: EndpointGroupNotFoundException
    },
    {
      shape: InternalServiceErrorException
    }
  ]
};
