import { DescribeStackDriftDetectionStatusInput } from "./DescribeStackDriftDetectionStatusInput";
import { DescribeStackDriftDetectionStatusOutput } from "./DescribeStackDriftDetectionStatusOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeStackDriftDetectionStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeStackDriftDetectionStatus",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeStackDriftDetectionStatusInput
  },
  output: {
    shape: DescribeStackDriftDetectionStatusOutput,
    resultWrapper: "DescribeStackDriftDetectionStatusResult"
  },
  errors: []
};
