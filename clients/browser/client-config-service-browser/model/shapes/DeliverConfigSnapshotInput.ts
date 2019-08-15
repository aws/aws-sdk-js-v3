import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeliverConfigSnapshotInput: _Structure_ = {
  type: "structure",
  required: ["deliveryChannelName"],
  members: {
    deliveryChannelName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
