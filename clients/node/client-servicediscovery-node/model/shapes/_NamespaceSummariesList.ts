import { List as _List_ } from "@aws-sdk/types";
import { _NamespaceSummary } from "./_NamespaceSummary";

export const _NamespaceSummariesList: _List_ = {
  type: "list",
  member: {
    shape: _NamespaceSummary
  }
};
