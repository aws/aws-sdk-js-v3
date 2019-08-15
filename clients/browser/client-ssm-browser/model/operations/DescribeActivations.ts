import { DescribeActivationsInput } from "../shapes/DescribeActivationsInput";
import { DescribeActivationsOutput } from "../shapes/DescribeActivationsOutput";
import { InvalidFilter } from "../shapes/InvalidFilter";
import { InvalidNextToken } from "../shapes/InvalidNextToken";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeActivations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeActivations",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeActivationsInput
  },
  output: {
    shape: DescribeActivationsOutput
  },
  errors: [
    {
      shape: InvalidFilter
    },
    {
      shape: InvalidNextToken
    },
    {
      shape: InternalServerError
    }
  ]
};
