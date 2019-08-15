import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Scte35SpliceInsert: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AdAvailOffset: {
      shape: {
        type: "integer",
        min: -1000
      },
      locationName: "adAvailOffset"
    },
    NoRegionalBlackoutFlag: {
      shape: {
        type: "string"
      },
      locationName: "noRegionalBlackoutFlag"
    },
    WebDeliveryAllowedFlag: {
      shape: {
        type: "string"
      },
      locationName: "webDeliveryAllowedFlag"
    }
  }
};
