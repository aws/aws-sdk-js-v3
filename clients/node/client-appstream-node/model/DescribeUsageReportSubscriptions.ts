import { DescribeUsageReportSubscriptionsInput } from "./DescribeUsageReportSubscriptionsInput";
import { DescribeUsageReportSubscriptionsOutput } from "./DescribeUsageReportSubscriptionsOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidAccountStatusException } from "./InvalidAccountStatusException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeUsageReportSubscriptions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeUsageReportSubscriptions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeUsageReportSubscriptionsInput
  },
  output: {
    shape: DescribeUsageReportSubscriptionsOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidAccountStatusException
    }
  ]
};
