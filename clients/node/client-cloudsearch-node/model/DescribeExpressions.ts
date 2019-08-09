import { DescribeExpressionsInput } from "./DescribeExpressionsInput";
import { DescribeExpressionsOutput } from "./DescribeExpressionsOutput";
import { BaseException } from "./BaseException";
import { InternalException } from "./InternalException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeExpressions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeExpressions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeExpressionsInput
  },
  output: {
    shape: DescribeExpressionsOutput,
    resultWrapper: "DescribeExpressionsResult"
  },
  errors: [
    {
      shape: BaseException
    },
    {
      shape: InternalException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
