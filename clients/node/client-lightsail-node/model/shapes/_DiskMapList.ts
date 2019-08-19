import { List as _List_ } from "@aws-sdk/types";
import { _DiskMap } from "./_DiskMap";

export const _DiskMapList: _List_ = {
  type: "list",
  member: {
    shape: _DiskMap
  }
};
