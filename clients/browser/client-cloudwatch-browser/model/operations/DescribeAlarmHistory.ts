import { DescribeAlarmHistoryInput } from "../shapes/DescribeAlarmHistoryInput";
import { DescribeAlarmHistoryOutput } from "../shapes/DescribeAlarmHistoryOutput";
import { InvalidNextToken } from "../shapes/InvalidNextToken";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeAlarmHistory: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeAlarmHistory",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeAlarmHistoryInput
  },
  output: {
    shape: DescribeAlarmHistoryOutput,
    resultWrapper: "DescribeAlarmHistoryResult"
  },
  errors: [
    {
      shape: InvalidNextToken
    }
  ]
};
