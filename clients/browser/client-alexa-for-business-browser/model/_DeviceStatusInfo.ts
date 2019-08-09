import { _DeviceStatusDetails } from "./_DeviceStatusDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DeviceStatusInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DeviceStatusDetails: {
      shape: _DeviceStatusDetails
    },
    ConnectionStatus: {
      shape: {
        type: "string"
      }
    }
  }
};
