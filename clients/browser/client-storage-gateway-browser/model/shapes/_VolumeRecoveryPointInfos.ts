import { List as _List_ } from "@aws-sdk/types";
import { _VolumeRecoveryPointInfo } from "./_VolumeRecoveryPointInfo";

export const _VolumeRecoveryPointInfos: _List_ = {
  type: "list",
  member: {
    shape: _VolumeRecoveryPointInfo
  }
};
