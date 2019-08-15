import { DescribeProductViewInput } from "../shapes/DescribeProductViewInput";
import { DescribeProductViewOutput } from "../shapes/DescribeProductViewOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeProductView: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeProductView",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeProductViewInput
  },
  output: {
    shape: DescribeProductViewOutput
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
