import { Structure as _Structure_ } from "@aws-sdk/types";

export const AttachNetworkInterfaceInput: _Structure_ = {
  type: "structure",
  required: ["DeviceIndex", "InstanceId", "NetworkInterfaceId"],
  members: {
    DeviceIndex: {
      shape: {
        type: "integer"
      },
      locationName: "deviceIndex"
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    InstanceId: {
      shape: {
        type: "string"
      },
      locationName: "instanceId"
    },
    NetworkInterfaceId: {
      shape: {
        type: "string"
      },
      locationName: "networkInterfaceId"
    }
  }
};
