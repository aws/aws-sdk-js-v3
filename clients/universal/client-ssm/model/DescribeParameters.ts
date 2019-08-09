import { DescribeParametersInput } from "./DescribeParametersInput";
import { DescribeParametersOutput } from "./DescribeParametersOutput";
import { InternalServerError } from "./InternalServerError";
import { InvalidFilterKey } from "./InvalidFilterKey";
import { InvalidFilterOption } from "./InvalidFilterOption";
import { InvalidFilterValue } from "./InvalidFilterValue";
import { InvalidNextToken } from "./InvalidNextToken";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
