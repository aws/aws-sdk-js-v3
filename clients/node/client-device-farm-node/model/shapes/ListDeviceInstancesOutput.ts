import { _DeviceInstances } from "./_DeviceInstances";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDeviceInstancesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    deviceInstances: {
      shape: _DeviceInstances
    },
    nextToken: {
      shape: {
        type: "string",
        min: 4
      }
    }
  }
};
