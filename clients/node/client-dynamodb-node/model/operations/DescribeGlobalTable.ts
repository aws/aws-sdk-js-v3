import { DescribeGlobalTableInput } from "../shapes/DescribeGlobalTableInput";
import { DescribeGlobalTableOutput } from "../shapes/DescribeGlobalTableOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { GlobalTableNotFoundException } from "../shapes/GlobalTableNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeGlobalTable: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeGlobalTable",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeGlobalTableInput
  },
  output: {
    shape: DescribeGlobalTableOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: GlobalTableNotFoundException
    }
  ]
};
