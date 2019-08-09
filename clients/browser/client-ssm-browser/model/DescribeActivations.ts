import { DescribeActivationsInput } from "./DescribeActivationsInput";
import { DescribeActivationsOutput } from "./DescribeActivationsOutput";
import { InvalidFilter } from "./InvalidFilter";
import { InvalidNextToken } from "./InvalidNextToken";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
