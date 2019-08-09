import { DescribeEventAggregatesInput } from "./DescribeEventAggregatesInput";
import { DescribeEventAggregatesOutput } from "./DescribeEventAggregatesOutput";
import { InvalidPaginationToken } from "./InvalidPaginationToken";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
