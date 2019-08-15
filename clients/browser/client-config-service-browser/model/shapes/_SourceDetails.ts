import { List as _List_ } from "@aws-sdk/types";
import { _SourceDetail } from "./_SourceDetail";

export const _SourceDetails: _List_ = {
  type: "list",
  member: {
    shape: _SourceDetail
  }
};
