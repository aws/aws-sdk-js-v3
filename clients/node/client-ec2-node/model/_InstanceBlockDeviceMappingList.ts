import { List as _List_ } from "@aws-sdk/types";
import { _InstanceBlockDeviceMapping } from "./_InstanceBlockDeviceMapping";

export const _InstanceBlockDeviceMappingList: _List_ = {
  type: "list",
  member: {
    shape: _InstanceBlockDeviceMapping,
    locationName: "item"
  }
};
