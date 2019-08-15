import { DescribeVolumeStatusInput } from "../shapes/DescribeVolumeStatusInput";
import { DescribeVolumeStatusOutput } from "../shapes/DescribeVolumeStatusOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeVolumeStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeVolumeStatus",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeVolumeStatusInput
  },
  output: {
    shape: DescribeVolumeStatusOutput
  },
  errors: []
};
