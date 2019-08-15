import { List as _List_ } from "@aws-sdk/types";
import { _ParameterHistory } from "./_ParameterHistory";

export const _ParameterHistoryList: _List_ = {
  type: "list",
  member: {
    shape: _ParameterHistory
  }
};
