import { DescribeDeliveryChannelsInput } from "./DescribeDeliveryChannelsInput";
import { DescribeDeliveryChannelsOutput } from "./DescribeDeliveryChannelsOutput";
import { NoSuchDeliveryChannelException } from "./NoSuchDeliveryChannelException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
