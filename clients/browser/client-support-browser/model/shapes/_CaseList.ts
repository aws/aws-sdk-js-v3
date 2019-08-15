import { List as _List_ } from "@aws-sdk/types";
import { _CaseDetails } from "./_CaseDetails";

export const _CaseList: _List_ = {
  type: "list",
  member: {
    shape: _CaseDetails
  }
};
