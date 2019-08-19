import { DescribeStreamInput } from "../shapes/DescribeStreamInput";
import { DescribeStreamOutput } from "../shapes/DescribeStreamOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeStream: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeStream",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeStreamInput
  },
  output: {
    shape: DescribeStreamOutput
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
