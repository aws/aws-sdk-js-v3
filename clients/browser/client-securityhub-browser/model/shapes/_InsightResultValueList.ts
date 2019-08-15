import { List as _List_ } from "@aws-sdk/types";
import { _InsightResultValue } from "./_InsightResultValue";

export const _InsightResultValueList: _List_ = {
  type: "list",
  member: {
    shape: _InsightResultValue
  }
};
