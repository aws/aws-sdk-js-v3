import { List as _List_ } from "@aws-sdk/types";
import { _Decision } from "./_Decision";

export const _DecisionList: _List_ = {
  type: "list",
  member: {
    shape: _Decision
  }
};
