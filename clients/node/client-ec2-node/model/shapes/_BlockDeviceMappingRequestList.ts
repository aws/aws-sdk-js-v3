import { List as _List_ } from "@aws-sdk/types";
import { _BlockDeviceMapping } from "./_BlockDeviceMapping";

export const _BlockDeviceMappingRequestList: _List_ = {
  type: "list",
  member: {
    shape: _BlockDeviceMapping,
    locationName: "BlockDeviceMapping"
  }
};
