import { _DeviceDescription } from "./_DeviceDescription";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDeviceOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DeviceDescription: {
      shape: _DeviceDescription,
      locationName: "deviceDescription"
    }
  }
};
