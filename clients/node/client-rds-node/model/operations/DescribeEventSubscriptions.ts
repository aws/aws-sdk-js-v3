import { DescribeEventSubscriptionsInput } from "../shapes/DescribeEventSubscriptionsInput";
import { DescribeEventSubscriptionsOutput } from "../shapes/DescribeEventSubscriptionsOutput";
import { SubscriptionNotFoundFault } from "../shapes/SubscriptionNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeEventSubscriptions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeEventSubscriptions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeEventSubscriptionsInput
  },
  output: {
    shape: DescribeEventSubscriptionsOutput,
    resultWrapper: "DescribeEventSubscriptionsResult"
  },
  errors: [
    {
      shape: SubscriptionNotFoundFault
    }
  ]
};
