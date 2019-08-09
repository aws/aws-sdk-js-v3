import { _Device } from "./_Device";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DeviceEvent: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Device: {
      shape: _Device,
      locationName: "device"
    },
    StdEvent: {
      shape: {
        type: "string"
      },
      locationName: "stdEvent"
    }
  }
};
