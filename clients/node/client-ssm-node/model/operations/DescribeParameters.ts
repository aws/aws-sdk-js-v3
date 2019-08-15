import { DescribeParametersInput } from "../shapes/DescribeParametersInput";
import { DescribeParametersOutput } from "../shapes/DescribeParametersOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { InvalidFilterKey } from "../shapes/InvalidFilterKey";
import { InvalidFilterOption } from "../shapes/InvalidFilterOption";
import { InvalidFilterValue } from "../shapes/InvalidFilterValue";
import { InvalidNextToken } from "../shapes/InvalidNextToken";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeParameters: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeParameters",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeParametersInput
  },
  output: {
    shape: DescribeParametersOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: InvalidFilterKey
    },
    {
      shape: InvalidFilterOption
    },
    {
      shape: InvalidFilterValue
    },
    {
      shape: InvalidNextToken
    }
  ]
};
