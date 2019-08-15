import { List as _List_ } from "@aws-sdk/types";
import { _StreamFile } from "./_StreamFile";

export const _StreamFiles: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _StreamFile
  }
};
