import { List as _List_ } from "@aws-sdk/types";
import { _AttemptDetail } from "./_AttemptDetail";

export const _AttemptDetails: _List_ = {
  type: "list",
  member: {
    shape: _AttemptDetail
  }
};
