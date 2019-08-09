import { DescribeInstancePatchesInput } from "./DescribeInstancePatchesInput";
import { DescribeInstancePatchesOutput } from "./DescribeInstancePatchesOutput";
import { InternalServerError } from "./InternalServerError";
import { InvalidInstanceId } from "./InvalidInstanceId";
import { InvalidFilter } from "./InvalidFilter";
import { InvalidNextToken } from "./InvalidNextToken";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
