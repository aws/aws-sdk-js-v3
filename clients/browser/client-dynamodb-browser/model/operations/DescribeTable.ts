import { DescribeTableInput } from "../shapes/DescribeTableInput";
import { DescribeTableOutput } from "../shapes/DescribeTableOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeTable: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeTable",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeTableInput
  },
  output: {
    shape: DescribeTableOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalServerError
    }
  ]
};
