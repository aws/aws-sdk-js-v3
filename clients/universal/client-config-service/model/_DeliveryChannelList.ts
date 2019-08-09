import { List as _List_ } from "@aws-sdk/types";
import { _DeliveryChannel } from "./_DeliveryChannel";

export const _DeliveryChannelList: _List_ = {
  type: "list",
  member: {
    shape: _DeliveryChannel
  }
};
