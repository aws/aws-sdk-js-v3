import { DescribeServiceActionExecutionParametersInput } from "../shapes/DescribeServiceActionExecutionParametersInput";
import { DescribeServiceActionExecutionParametersOutput } from "../shapes/DescribeServiceActionExecutionParametersOutput";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeServiceActionExecutionParameters: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeServiceActionExecutionParameters",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeServiceActionExecutionParametersInput
  },
  output: {
    shape: DescribeServiceActionExecutionParametersOutput
  },
  errors: [
    {
      shape: InvalidParametersException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
