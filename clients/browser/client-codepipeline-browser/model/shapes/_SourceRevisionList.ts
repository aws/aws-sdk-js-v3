import { List as _List_ } from "@aws-sdk/types";
import { _SourceRevision } from "./_SourceRevision";

export const _SourceRevisionList: _List_ = {
  type: "list",
  member: {
    shape: _SourceRevision
  }
};
