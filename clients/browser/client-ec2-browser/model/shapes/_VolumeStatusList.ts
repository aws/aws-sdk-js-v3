import { List as _List_ } from "@aws-sdk/types";
import { _VolumeStatusItem } from "./_VolumeStatusItem";

export const _VolumeStatusList: _List_ = {
  type: "list",
  member: {
    shape: _VolumeStatusItem,
    locationName: "item"
  }
};
