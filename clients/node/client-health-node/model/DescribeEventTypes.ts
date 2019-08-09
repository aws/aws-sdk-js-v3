import { DescribeEventTypesInput } from "./DescribeEventTypesInput";
import { DescribeEventTypesOutput } from "./DescribeEventTypesOutput";
import { InvalidPaginationToken } from "./InvalidPaginationToken";
import { UnsupportedLocale } from "./UnsupportedLocale";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeEventTypes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeEventTypes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeEventTypesInput
  },
  output: {
    shape: DescribeEventTypesOutput
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
