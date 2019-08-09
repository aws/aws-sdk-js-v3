import { List as _List_ } from "@aws-sdk/types";
import { _AccountDetail } from "./_AccountDetail";

export const _AccountDetails: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _AccountDetail
  }
};
