import { DescribeTrailsInput } from "../shapes/DescribeTrailsInput";
import { DescribeTrailsOutput } from "../shapes/DescribeTrailsOutput";
import { UnsupportedOperationException } from "../shapes/UnsupportedOperationException";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeTrails: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeTrails",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeTrailsInput
  },
  output: {
    shape: DescribeTrailsOutput
  },
  errors: [
    {
      shape: UnsupportedOperationException
    },
    {
      shape: OperationNotPermittedException
    }
  ]
};
