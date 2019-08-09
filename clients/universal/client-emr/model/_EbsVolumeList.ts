import { List as _List_ } from "@aws-sdk/types";
import { _EbsVolume } from "./_EbsVolume";

export const _EbsVolumeList: _List_ = {
  type: "list",
  member: {
    shape: _EbsVolume
  }
};
