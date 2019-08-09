import { DescribeEventSubscriptionsInput } from "./DescribeEventSubscriptionsInput";
import { DescribeEventSubscriptionsOutput } from "./DescribeEventSubscriptionsOutput";
import { SubscriptionNotFoundFault } from "./SubscriptionNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
