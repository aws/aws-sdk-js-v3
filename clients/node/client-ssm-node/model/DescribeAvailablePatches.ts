import { DescribeAvailablePatchesInput } from "./DescribeAvailablePatchesInput";
import { DescribeAvailablePatchesOutput } from "./DescribeAvailablePatchesOutput";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
