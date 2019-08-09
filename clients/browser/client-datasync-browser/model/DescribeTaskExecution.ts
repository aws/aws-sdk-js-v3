import { DescribeTaskExecutionInput } from "./DescribeTaskExecutionInput";
import { DescribeTaskExecutionOutput } from "./DescribeTaskExecutionOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalException } from "./InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeTaskExecution: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeTaskExecution",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeTaskExecutionInput
  },
  output: {
    shape: DescribeTaskExecutionOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: InternalException
    }
  ]
};
