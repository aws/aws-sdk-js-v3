import { DescribeFlowLogsInput } from "./DescribeFlowLogsInput";
import { DescribeFlowLogsOutput } from "./DescribeFlowLogsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
