import { DescribeProductViewInput } from "./DescribeProductViewInput";
import { DescribeProductViewOutput } from "./DescribeProductViewOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParametersException } from "./InvalidParametersException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
