import { List as _List_ } from "@aws-sdk/types";
import { _DiskImage } from "./_DiskImage";

export const _DiskImageList: _List_ = {
  type: "list",
  member: {
    shape: _DiskImage
  }
};
