import { _ConfigExportDeliveryInfo } from "./_ConfigExportDeliveryInfo";
import { _ConfigStreamDeliveryInfo } from "./_ConfigStreamDeliveryInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DeliveryChannelStatus: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string"
      }
    },
    configSnapshotDeliveryInfo: {
      shape: _ConfigExportDeliveryInfo
    },
    configHistoryDeliveryInfo: {
      shape: _ConfigExportDeliveryInfo
    },
    configStreamDeliveryInfo: {
      shape: _ConfigStreamDeliveryInfo
    }
  }
};
