import { _DeliveryChannelNameList } from "./_DeliveryChannelNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDeliveryChannelStatusInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DeliveryChannelNames: {
      shape: _DeliveryChannelNameList
    }
  }
};
