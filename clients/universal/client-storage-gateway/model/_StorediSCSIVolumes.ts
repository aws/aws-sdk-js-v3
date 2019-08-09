import { List as _List_ } from "@aws-sdk/types";
import { _StorediSCSIVolume } from "./_StorediSCSIVolume";

export const _StorediSCSIVolumes: _List_ = {
  type: "list",
  member: {
    shape: _StorediSCSIVolume
  }
};
