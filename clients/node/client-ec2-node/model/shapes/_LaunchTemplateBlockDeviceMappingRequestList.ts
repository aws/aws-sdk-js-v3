import { List as _List_ } from "@aws-sdk/types";
import { _LaunchTemplateBlockDeviceMappingRequest } from "./_LaunchTemplateBlockDeviceMappingRequest";

export const _LaunchTemplateBlockDeviceMappingRequestList: _List_ = {
  type: "list",
  member: {
    shape: _LaunchTemplateBlockDeviceMappingRequest,
    locationName: "BlockDeviceMapping"
  }
};
