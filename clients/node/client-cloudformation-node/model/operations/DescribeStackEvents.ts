import { DescribeStackEventsInput } from "../shapes/DescribeStackEventsInput";
import { DescribeStackEventsOutput } from "../shapes/DescribeStackEventsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeStackEvents: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeStackEvents",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeStackEventsInput
  },
  output: {
    shape: DescribeStackEventsOutput,
    resultWrapper: "DescribeStackEventsResult"
  },
  errors: []
};
