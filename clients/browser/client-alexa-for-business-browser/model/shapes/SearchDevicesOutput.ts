import { _DeviceDataList } from "./_DeviceDataList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SearchDevicesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Devices: {
      shape: _DeviceDataList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TotalCount: {
      shape: {
        type: "integer"
      }
    }
  }
};
