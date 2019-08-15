import { DescribeEventsInput } from "../shapes/DescribeEventsInput";
import { DescribeEventsOutput } from "../shapes/DescribeEventsOutput";
import { InvalidPaginationToken } from "../shapes/InvalidPaginationToken";
import { UnsupportedLocale } from "../shapes/UnsupportedLocale";
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
    shape: DescribeEventsOutput
  },
  errors: [
    {
      shape: InvalidPaginationToken
    },
    {
      shape: UnsupportedLocale
    }
  ]
};
