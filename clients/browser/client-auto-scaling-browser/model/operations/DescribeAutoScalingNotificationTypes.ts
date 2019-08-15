import { DescribeAutoScalingNotificationTypesInput } from "../shapes/DescribeAutoScalingNotificationTypesInput";
import { DescribeAutoScalingNotificationTypesOutput } from "../shapes/DescribeAutoScalingNotificationTypesOutput";
import { ResourceContentionFault } from "../shapes/ResourceContentionFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeAutoScalingNotificationTypes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeAutoScalingNotificationTypes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeAutoScalingNotificationTypesInput
  },
  output: {
    shape: DescribeAutoScalingNotificationTypesOutput,
    resultWrapper: "DescribeAutoScalingNotificationTypesResult"
  },
  errors: [
    {
      shape: ResourceContentionFault
    }
  ]
};
