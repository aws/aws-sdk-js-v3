import { DescribeJobInput } from "./DescribeJobInput";
import { DescribeJobOutput } from "./DescribeJobOutput";
import { InvalidResourceException } from "./InvalidResourceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
