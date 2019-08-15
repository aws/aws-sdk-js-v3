import { DescribeInstancePatchStatesInput } from "../shapes/DescribeInstancePatchStatesInput";
import { DescribeInstancePatchStatesOutput } from "../shapes/DescribeInstancePatchStatesOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { InvalidNextToken } from "../shapes/InvalidNextToken";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeInstancePatchStates: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeInstancePatchStates",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeInstancePatchStatesInput
  },
  output: {
    shape: DescribeInstancePatchStatesOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: InvalidNextToken
    }
  ]
};
