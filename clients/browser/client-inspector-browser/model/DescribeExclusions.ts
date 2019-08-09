import { DescribeExclusionsInput } from "./DescribeExclusionsInput";
import { DescribeExclusionsOutput } from "./DescribeExclusionsOutput";
import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeExclusions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeExclusions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeExclusionsInput
  },
  output: {
    shape: DescribeExclusionsOutput
  },
  errors: [
    {
      shape: InternalException
    },
    {
      shape: InvalidInputException
    }
  ]
};
