import { DescribeEventDetailsInput } from "../shapes/DescribeEventDetailsInput";
import { DescribeEventDetailsOutput } from "../shapes/DescribeEventDetailsOutput";
import { UnsupportedLocale } from "../shapes/UnsupportedLocale";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeEventDetails: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeEventDetails",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeEventDetailsInput
  },
  output: {
    shape: DescribeEventDetailsOutput
  },
  errors: [
    {
      shape: UnsupportedLocale
    }
  ]
};
