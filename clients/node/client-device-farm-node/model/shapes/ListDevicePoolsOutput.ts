import { _DevicePools } from "./_DevicePools";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDevicePoolsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    devicePools: {
      shape: _DevicePools
    },
    nextToken: {
      shape: {
        type: "string",
        min: 4
      }
    }
  }
};
