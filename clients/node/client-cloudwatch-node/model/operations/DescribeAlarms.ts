import { DescribeAlarmsInput } from "../shapes/DescribeAlarmsInput";
import { DescribeAlarmsOutput } from "../shapes/DescribeAlarmsOutput";
import { InvalidNextToken } from "../shapes/InvalidNextToken";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
