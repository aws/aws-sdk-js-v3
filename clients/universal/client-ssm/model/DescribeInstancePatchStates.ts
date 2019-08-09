import { DescribeInstancePatchStatesInput } from "./DescribeInstancePatchStatesInput";
import { DescribeInstancePatchStatesOutput } from "./DescribeInstancePatchStatesOutput";
import { InternalServerError } from "./InternalServerError";
import { InvalidNextToken } from "./InvalidNextToken";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
