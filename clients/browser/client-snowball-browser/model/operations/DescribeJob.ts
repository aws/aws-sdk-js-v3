import { DescribeJobInput } from "../shapes/DescribeJobInput";
import { DescribeJobOutput } from "../shapes/DescribeJobOutput";
import { InvalidResourceException } from "../shapes/InvalidResourceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeJob: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeJob",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeJobInput
  },
  output: {
    shape: DescribeJobOutput
  },
  errors: [
    {
      shape: InvalidResourceException
    }
  ]
};
