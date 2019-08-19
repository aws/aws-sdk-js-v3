import { Map as _Map_ } from "@aws-sdk/types";
import { _DiskMapList } from "./_DiskMapList";

export const _AttachedDiskMap: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _DiskMapList
  }
};
