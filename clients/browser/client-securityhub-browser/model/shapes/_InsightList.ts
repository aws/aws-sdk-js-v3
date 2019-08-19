import { List as _List_ } from "@aws-sdk/types";
import { _Insight } from "./_Insight";

export const _InsightList: _List_ = {
  type: "list",
  member: {
    shape: _Insight
  }
};
