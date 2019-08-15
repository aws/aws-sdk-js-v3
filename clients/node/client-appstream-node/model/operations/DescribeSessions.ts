import { DescribeSessionsInput } from "../shapes/DescribeSessionsInput";
import { DescribeSessionsOutput } from "../shapes/DescribeSessionsOutput";
import { InvalidParameterCombinationException } from "../shapes/InvalidParameterCombinationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeSessions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeSessions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeSessionsInput
  },
  output: {
    shape: DescribeSessionsOutput
  },
  errors: [
    {
      shape: InvalidParameterCombinationException
    }
  ]
};
