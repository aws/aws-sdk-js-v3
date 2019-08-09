import { DescribeAlarmsInput } from "./DescribeAlarmsInput";
import { DescribeAlarmsOutput } from "./DescribeAlarmsOutput";
import { InvalidNextToken } from "./InvalidNextToken";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeAlarms: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeAlarms",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeAlarmsInput
  },
  output: {
    shape: DescribeAlarmsOutput,
    resultWrapper: "DescribeAlarmsResult"
  },
  errors: [
    {
      shape: InvalidNextToken
    }
  ]
};
