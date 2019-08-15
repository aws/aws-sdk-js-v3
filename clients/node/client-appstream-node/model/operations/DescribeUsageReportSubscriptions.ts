import { DescribeUsageReportSubscriptionsInput } from "../shapes/DescribeUsageReportSubscriptionsInput";
import { DescribeUsageReportSubscriptionsOutput } from "../shapes/DescribeUsageReportSubscriptionsOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidAccountStatusException } from "../shapes/InvalidAccountStatusException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
