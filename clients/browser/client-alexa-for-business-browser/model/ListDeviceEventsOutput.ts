import { _DeviceEventList } from "./_DeviceEventList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDeviceEventsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DeviceEvents: {
      shape: _DeviceEventList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
