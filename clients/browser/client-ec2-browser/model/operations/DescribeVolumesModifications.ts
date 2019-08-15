import { DescribeVolumesModificationsInput } from "../shapes/DescribeVolumesModificationsInput";
import { DescribeVolumesModificationsOutput } from "../shapes/DescribeVolumesModificationsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeVolumesModifications: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeVolumesModifications",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeVolumesModificationsInput
  },
  output: {
    shape: DescribeVolumesModificationsOutput
  },
  errors: []
};
