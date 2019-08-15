import { _DeliveryChannelList } from "./_DeliveryChannelList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDeliveryChannelsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DeliveryChannels: {
      shape: _DeliveryChannelList
    }
  }
};
