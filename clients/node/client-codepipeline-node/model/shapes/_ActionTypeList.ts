import { List as _List_ } from "@aws-sdk/types";
import { _ActionType } from "./_ActionType";

export const _ActionTypeList: _List_ = {
  type: "list",
  member: {
    shape: _ActionType
  }
};
