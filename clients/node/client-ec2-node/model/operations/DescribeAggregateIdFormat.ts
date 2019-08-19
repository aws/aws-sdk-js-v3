import { DescribeAggregateIdFormatInput } from "../shapes/DescribeAggregateIdFormatInput";
import { DescribeAggregateIdFormatOutput } from "../shapes/DescribeAggregateIdFormatOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeAggregateIdFormat: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeAggregateIdFormat",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeAggregateIdFormatInput
  },
  output: {
    shape: DescribeAggregateIdFormatOutput
  },
  errors: []
};
