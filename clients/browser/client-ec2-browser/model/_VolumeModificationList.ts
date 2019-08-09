import { List as _List_ } from "@aws-sdk/types";
import { _VolumeModification } from "./_VolumeModification";

export const _VolumeModificationList: _List_ = {
  type: "list",
  member: {
    shape: _VolumeModification,
    locationName: "item"
  }
};
