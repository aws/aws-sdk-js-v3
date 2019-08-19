import { _Devices } from "./_Devices";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDevicesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    devices: {
      shape: _Devices
    },
    nextToken: {
      shape: {
        type: "string",
        min: 4
      }
    }
  }
};
