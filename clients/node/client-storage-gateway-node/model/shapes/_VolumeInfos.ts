import { List as _List_ } from "@aws-sdk/types";
import { _VolumeInfo } from "./_VolumeInfo";

export const _VolumeInfos: _List_ = {
  type: "list",
  member: {
    shape: _VolumeInfo
  }
};
