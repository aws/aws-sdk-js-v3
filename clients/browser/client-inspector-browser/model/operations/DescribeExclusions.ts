import { DescribeExclusionsInput } from "../shapes/DescribeExclusionsInput";
import { DescribeExclusionsOutput } from "../shapes/DescribeExclusionsOutput";
import { InternalException } from "../shapes/InternalException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
