import { DescribeEventAggregatesInput } from "../shapes/DescribeEventAggregatesInput";
import { DescribeEventAggregatesOutput } from "../shapes/DescribeEventAggregatesOutput";
import { InvalidPaginationToken } from "../shapes/InvalidPaginationToken";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeEventAggregates: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeEventAggregates",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeEventAggregatesInput
  },
  output: {
    shape: DescribeEventAggregatesOutput
  },
  errors: [
    {
      shape: InvalidPaginationToken
    }
  ]
};
