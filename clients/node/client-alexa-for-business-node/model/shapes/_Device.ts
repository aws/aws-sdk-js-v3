import { _DeviceStatusInfo } from "./_DeviceStatusInfo";
import { _DeviceNetworkProfileInfo } from "./_DeviceNetworkProfileInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Device: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DeviceArn: {
      shape: {
        type: "string"
      }
    },
    DeviceSerialNumber: {
      shape: {
        type: "string"
      }
    },
    DeviceType: {
      shape: {
        type: "string"
      }
    },
    DeviceName: {
      shape: {
        type: "string",
        min: 2
      }
    },
    SoftwareVersion: {
      shape: {
        type: "string"
      }
    },
    MacAddress: {
      shape: {
        type: "string"
      }
    },
    RoomArn: {
      shape: {
        type: "string"
      }
    },
    DeviceStatus: {
      shape: {
        type: "string"
      }
    },
    DeviceStatusInfo: {
      shape: _DeviceStatusInfo
    },
    NetworkProfileInfo: {
      shape: _DeviceNetworkProfileInfo
    }
  }
};
