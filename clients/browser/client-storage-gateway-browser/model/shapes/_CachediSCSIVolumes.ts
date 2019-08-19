import { List as _List_ } from "@aws-sdk/types";
import { _CachediSCSIVolume } from "./_CachediSCSIVolume";

export const _CachediSCSIVolumes: _List_ = {
  type: "list",
  member: {
    shape: _CachediSCSIVolume
  }
};
