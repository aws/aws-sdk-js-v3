import { DescribeEventsInput } from "../shapes/DescribeEventsInput";
import { DescribeEventsOutput } from "../shapes/DescribeEventsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeEvents: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeEvents",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeEventsInput
  },
  output: {
    shape: DescribeEventsOutput,
    resultWrapper: "DescribeEventsResult"
  },
  errors: []
};
