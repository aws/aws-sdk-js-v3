import { DescribeVolumeAttributeInput } from "../shapes/DescribeVolumeAttributeInput";
import { DescribeVolumeAttributeOutput } from "../shapes/DescribeVolumeAttributeOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeVolumeAttribute: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeVolumeAttribute",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeVolumeAttributeInput
  },
  output: {
    shape: DescribeVolumeAttributeOutput
  },
  errors: []
};
