import { _DeliveryChannelStatusList } from "./_DeliveryChannelStatusList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDeliveryChannelStatusOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DeliveryChannelsStatus: {
      shape: _DeliveryChannelStatusList
    }
  }
};
