import { List as _List_ } from "@aws-sdk/types";
import { _RecordPatch } from "./_RecordPatch";

export const _RecordPatchList: _List_ = {
  type: "list",
  member: {
    shape: _RecordPatch
  }
};
