import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Scte35DeliveryRestrictions: _Structure_ = {
  type: "structure",
  required: [
    "DeviceRestrictions",
    "ArchiveAllowedFlag",
    "WebDeliveryAllowedFlag",
    "NoRegionalBlackoutFlag"
  ],
  members: {
    ArchiveAllowedFlag: {
      shape: {
        type: "string"
      },
      locationName: "archiveAllowedFlag"
    },
    DeviceRestrictions: {
      shape: {
        type: "string"
      },
      locationName: "deviceRestrictions"
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
