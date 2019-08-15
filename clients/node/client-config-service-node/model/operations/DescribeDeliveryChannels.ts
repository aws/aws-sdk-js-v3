import { DescribeDeliveryChannelsInput } from "../shapes/DescribeDeliveryChannelsInput";
import { DescribeDeliveryChannelsOutput } from "../shapes/DescribeDeliveryChannelsOutput";
import { NoSuchDeliveryChannelException } from "../shapes/NoSuchDeliveryChannelException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeDeliveryChannels: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDeliveryChannels",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeDeliveryChannelsInput
  },
  output: {
    shape: DescribeDeliveryChannelsOutput
  },
  errors: [
    {
      shape: NoSuchDeliveryChannelException
    }
  ]
};
