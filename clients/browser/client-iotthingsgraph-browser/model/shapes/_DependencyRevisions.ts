import { List as _List_ } from "@aws-sdk/types";
import { _DependencyRevision } from "./_DependencyRevision";

export const _DependencyRevisions: _List_ = {
  type: "list",
  member: {
    shape: _DependencyRevision
  }
};
