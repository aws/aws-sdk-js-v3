import { List as _List_ } from "@aws-sdk/types";
import { _ImportInstanceVolumeDetailItem } from "./_ImportInstanceVolumeDetailItem";

export const _ImportInstanceVolumeDetailSet: _List_ = {
  type: "list",
  member: {
    shape: _ImportInstanceVolumeDetailItem,
    locationName: "item"
  }
};
