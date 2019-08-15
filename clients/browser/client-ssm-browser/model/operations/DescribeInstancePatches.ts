import { DescribeInstancePatchesInput } from "../shapes/DescribeInstancePatchesInput";
import { DescribeInstancePatchesOutput } from "../shapes/DescribeInstancePatchesOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { InvalidInstanceId } from "../shapes/InvalidInstanceId";
import { InvalidFilter } from "../shapes/InvalidFilter";
import { InvalidNextToken } from "../shapes/InvalidNextToken";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeInstancePatches: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeInstancePatches",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeInstancePatchesInput
  },
  output: {
    shape: DescribeInstancePatchesOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: InvalidInstanceId
    },
    {
      shape: InvalidFilter
    },
    {
      shape: InvalidNextToken
    }
  ]
};
