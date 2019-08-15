import { DescribeExpressionsInput } from "../shapes/DescribeExpressionsInput";
import { DescribeExpressionsOutput } from "../shapes/DescribeExpressionsOutput";
import { BaseException } from "../shapes/BaseException";
import { InternalException } from "../shapes/InternalException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
