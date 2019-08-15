import { DescribeSpotDatafeedSubscriptionInput } from "../shapes/DescribeSpotDatafeedSubscriptionInput";
import { DescribeSpotDatafeedSubscriptionOutput } from "../shapes/DescribeSpotDatafeedSubscriptionOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
