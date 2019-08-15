import { List as _List_ } from "@aws-sdk/types";
import { _ExpressionStatus } from "./_ExpressionStatus";

export const _ExpressionStatusList: _List_ = {
  type: "list",
  member: {
    shape: _ExpressionStatus
  }
};
