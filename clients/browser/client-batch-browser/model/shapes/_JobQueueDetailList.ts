import { List as _List_ } from "@aws-sdk/types";
import { _JobQueueDetail } from "./_JobQueueDetail";

export const _JobQueueDetailList: _List_ = {
  type: "list",
  member: {
    shape: _JobQueueDetail
  }
};
