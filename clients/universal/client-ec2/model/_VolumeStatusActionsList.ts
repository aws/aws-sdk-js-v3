import { List as _List_ } from "@aws-sdk/types";
import { _VolumeStatusAction } from "./_VolumeStatusAction";

export const _VolumeStatusActionsList: _List_ = {
  type: "list",
  member: {
    shape: _VolumeStatusAction,
    locationName: "item"
  }
};
