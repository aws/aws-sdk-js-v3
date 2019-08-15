import { List as _List_ } from "@aws-sdk/types";
import { _DeliveryChannelStatus } from "./_DeliveryChannelStatus";

export const _DeliveryChannelStatusList: _List_ = {
  type: "list",
  member: {
    shape: _DeliveryChannelStatus
  }
};
