import { DescribeTrailsInput } from "./DescribeTrailsInput";
import { DescribeTrailsOutput } from "./DescribeTrailsOutput";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
