import { List as _List_ } from "@aws-sdk/types";
import { _UserProfileSummary } from "./_UserProfileSummary";

export const _UserProfilesList: _List_ = {
  type: "list",
  member: {
    shape: _UserProfileSummary
  }
};
