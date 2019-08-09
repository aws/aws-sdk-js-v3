import { DescribeSpotDatafeedSubscriptionInput } from "./DescribeSpotDatafeedSubscriptionInput";
import { DescribeSpotDatafeedSubscriptionOutput } from "./DescribeSpotDatafeedSubscriptionOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeSpotDatafeedSubscription: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeSpotDatafeedSubscription",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeSpotDatafeedSubscriptionInput
  },
  output: {
    shape: DescribeSpotDatafeedSubscriptionOutput
  },
  errors: []
};
