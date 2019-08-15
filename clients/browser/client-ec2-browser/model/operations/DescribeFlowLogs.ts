import { DescribeFlowLogsInput } from "../shapes/DescribeFlowLogsInput";
import { DescribeFlowLogsOutput } from "../shapes/DescribeFlowLogsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeFlowLogs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeFlowLogs",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeFlowLogsInput
  },
  output: {
    shape: DescribeFlowLogsOutput
  },
  errors: []
};
