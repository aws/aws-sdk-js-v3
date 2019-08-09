import { List as _List_ } from "@aws-sdk/types";
import { _UtilizationByTime } from "./_UtilizationByTime";

export const _UtilizationsByTime: _List_ = {
  type: "list",
  member: {
    shape: _UtilizationByTime
  }
};
