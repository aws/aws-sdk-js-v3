import { List as _List_ } from "@aws-sdk/types";
import { _GameSessionDetail } from "./_GameSessionDetail";

export const _GameSessionDetailList: _List_ = {
  type: "list",
  member: {
    shape: _GameSessionDetail
  }
};
