import { DescribeServiceActionExecutionParametersInput } from "./DescribeServiceActionExecutionParametersInput";
import { DescribeServiceActionExecutionParametersOutput } from "./DescribeServiceActionExecutionParametersOutput";
import { InvalidParametersException } from "./InvalidParametersException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
