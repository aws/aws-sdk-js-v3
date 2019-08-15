import { DescribeInstancePatchStatesForPatchGroupInput } from "../shapes/DescribeInstancePatchStatesForPatchGroupInput";
import { DescribeInstancePatchStatesForPatchGroupOutput } from "../shapes/DescribeInstancePatchStatesForPatchGroupOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { InvalidFilter } from "../shapes/InvalidFilter";
import { InvalidNextToken } from "../shapes/InvalidNextToken";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeInstancePatchStatesForPatchGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeInstancePatchStatesForPatchGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeInstancePatchStatesForPatchGroupInput
  },
  output: {
    shape: DescribeInstancePatchStatesForPatchGroupOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: InvalidFilter
    },
    {
      shape: InvalidNextToken
    }
  ]
};
