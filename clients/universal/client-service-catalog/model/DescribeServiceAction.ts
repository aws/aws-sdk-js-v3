import { DescribeServiceActionInput } from "./DescribeServiceActionInput";
import { DescribeServiceActionOutput } from "./DescribeServiceActionOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeServiceAction: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeServiceAction",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeServiceActionInput
  },
  output: {
    shape: DescribeServiceActionOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    }
  ]
};
