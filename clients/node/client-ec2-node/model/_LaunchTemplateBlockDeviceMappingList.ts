import { List as _List_ } from "@aws-sdk/types";
import { _LaunchTemplateBlockDeviceMapping } from "./_LaunchTemplateBlockDeviceMapping";

export const _LaunchTemplateBlockDeviceMappingList: _List_ = {
  type: "list",
  member: {
    shape: _LaunchTemplateBlockDeviceMapping,
    locationName: "item"
  }
};
