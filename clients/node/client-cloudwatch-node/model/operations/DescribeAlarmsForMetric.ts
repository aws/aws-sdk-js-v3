import { DescribeAlarmsForMetricInput } from "../shapes/DescribeAlarmsForMetricInput";
import { DescribeAlarmsForMetricOutput } from "../shapes/DescribeAlarmsForMetricOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeAlarmsForMetric: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeAlarmsForMetric",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeAlarmsForMetricInput
  },
  output: {
    shape: DescribeAlarmsForMetricOutput,
    resultWrapper: "DescribeAlarmsForMetricResult"
  },
  errors: []
};
