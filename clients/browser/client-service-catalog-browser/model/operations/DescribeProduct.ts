import { DescribeProductInput } from "../shapes/DescribeProductInput";
import { DescribeProductOutput } from "../shapes/DescribeProductOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeProduct: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeProduct",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeProductInput
  },
  output: {
    shape: DescribeProductOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParametersException
    }
  ]
};
