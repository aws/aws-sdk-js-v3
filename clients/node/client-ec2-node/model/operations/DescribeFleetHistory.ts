import { DescribeFleetHistoryInput } from "../shapes/DescribeFleetHistoryInput";
import { DescribeFleetHistoryOutput } from "../shapes/DescribeFleetHistoryOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeFleetHistory: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeFleetHistory",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeFleetHistoryInput
  },
  output: {
    shape: DescribeFleetHistoryOutput
  },
  errors: []
};
