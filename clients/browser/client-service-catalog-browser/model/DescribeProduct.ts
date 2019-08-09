import { DescribeProductInput } from "./DescribeProductInput";
import { DescribeProductOutput } from "./DescribeProductOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParametersException } from "./InvalidParametersException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
