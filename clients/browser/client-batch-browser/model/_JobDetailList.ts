import { List as _List_ } from "@aws-sdk/types";
import { _JobDetail } from "./_JobDetail";

export const _JobDetailList: _List_ = {
  type: "list",
  member: {
    shape: _JobDetail
  }
};
