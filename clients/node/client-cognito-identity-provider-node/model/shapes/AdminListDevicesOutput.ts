import { _DeviceListType } from "./_DeviceListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AdminListDevicesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Devices: {
      shape: _DeviceListType
    },
    PaginationToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
