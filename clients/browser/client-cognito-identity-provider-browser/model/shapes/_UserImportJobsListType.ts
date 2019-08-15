import { List as _List_ } from "@aws-sdk/types";
import { _UserImportJobType } from "./_UserImportJobType";

export const _UserImportJobsListType: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _UserImportJobType
  }
};
