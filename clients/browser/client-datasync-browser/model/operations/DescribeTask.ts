import { DescribeTaskInput } from "../shapes/DescribeTaskInput";
import { DescribeTaskOutput } from "../shapes/DescribeTaskOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalException } from "../shapes/InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeTask: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeTask",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeTaskInput
  },
  output: {
    shape: DescribeTaskOutput
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
