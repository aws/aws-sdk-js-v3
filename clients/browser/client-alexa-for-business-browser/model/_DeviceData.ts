import { _DeviceStatusInfo } from "./_DeviceStatusInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DeviceData: _Structure_ = {
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
    DeviceStatus: {
      shape: {
        type: "string"
      }
    },
    NetworkProfileArn: {
      shape: {
        type: "string"
      }
    },
    NetworkProfileName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RoomArn: {
      shape: {
        type: "string"
      }
    },
    RoomName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DeviceStatusInfo: {
      shape: _DeviceStatusInfo
    }
  }
};
