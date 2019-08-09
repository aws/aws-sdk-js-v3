import { DescribeInstancePatchStatesForPatchGroupInput } from "./DescribeInstancePatchStatesForPatchGroupInput";
import { DescribeInstancePatchStatesForPatchGroupOutput } from "./DescribeInstancePatchStatesForPatchGroupOutput";
import { InternalServerError } from "./InternalServerError";
import { InvalidFilter } from "./InvalidFilter";
import { InvalidNextToken } from "./InvalidNextToken";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
