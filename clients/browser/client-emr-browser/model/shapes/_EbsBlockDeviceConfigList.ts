import { List as _List_ } from "@aws-sdk/types";
import { _EbsBlockDeviceConfig } from "./_EbsBlockDeviceConfig";

export const _EbsBlockDeviceConfigList: _List_ = {
  type: "list",
  member: {
    shape: _EbsBlockDeviceConfig
  }
};
