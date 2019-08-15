import { _DeliveryChannel } from "./_DeliveryChannel";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutDeliveryChannelInput: _Structure_ = {
  type: "structure",
  required: ["DeliveryChannel"],
  members: {
    DeliveryChannel: {
      shape: _DeliveryChannel
    }
  }
};
