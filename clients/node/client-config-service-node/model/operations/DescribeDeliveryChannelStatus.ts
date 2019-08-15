import { DescribeDeliveryChannelStatusInput } from "../shapes/DescribeDeliveryChannelStatusInput";
import { DescribeDeliveryChannelStatusOutput } from "../shapes/DescribeDeliveryChannelStatusOutput";
import { NoSuchDeliveryChannelException } from "../shapes/NoSuchDeliveryChannelException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeDeliveryChannelStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDeliveryChannelStatus",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeDeliveryChannelStatusInput
  },
  output: {
    shape: DescribeDeliveryChannelStatusOutput
  },
  errors: [
    {
      shape: NoSuchDeliveryChannelException
    }
  ]
};
