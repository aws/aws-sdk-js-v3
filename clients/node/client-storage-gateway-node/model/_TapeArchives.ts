import { List as _List_ } from "@aws-sdk/types";
import { _TapeArchive } from "./_TapeArchive";

export const _TapeArchives: _List_ = {
  type: "list",
  member: {
    shape: _TapeArchive
  }
};
