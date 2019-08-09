import { DescribeSpotFleetRequestHistoryInput } from "./DescribeSpotFleetRequestHistoryInput";
import { DescribeSpotFleetRequestHistoryOutput } from "./DescribeSpotFleetRequestHistoryOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeSpotFleetRequestHistory: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeSpotFleetRequestHistory",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeSpotFleetRequestHistoryInput
  },
  output: {
    shape: DescribeSpotFleetRequestHistoryOutput
  },
  errors: []
};
