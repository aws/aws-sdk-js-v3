import { List as _List_ } from "@aws-sdk/types";
import { _PolicyVersion } from "./_PolicyVersion";

export const _policyDocumentVersionListType: _List_ = {
  type: "list",
  member: {
    shape: _PolicyVersion
  }
};
