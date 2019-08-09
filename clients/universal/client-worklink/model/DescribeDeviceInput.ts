import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDeviceInput: _Structure_ = {
  type: "structure",
  required: ["FleetArn", "DeviceId"],
  members: {
    FleetArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    DeviceId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
