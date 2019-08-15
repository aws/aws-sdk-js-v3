import { DescribeAvailablePatchesInput } from "../shapes/DescribeAvailablePatchesInput";
import { DescribeAvailablePatchesOutput } from "../shapes/DescribeAvailablePatchesOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeAvailablePatches: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeAvailablePatches",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeAvailablePatchesInput
  },
  output: {
    shape: DescribeAvailablePatchesOutput
  },
  errors: [
    {
      shape: InternalServerError
    }
  ]
};
