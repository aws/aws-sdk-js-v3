import { DescribeTaskInput } from "./DescribeTaskInput";
import { DescribeTaskOutput } from "./DescribeTaskOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalException } from "./InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
