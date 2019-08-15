import { List as _List_ } from "@aws-sdk/types";
import { _OrderByElement } from "./_OrderByElement";

export const _OrderByList: _List_ = {
  type: "list",
  member: {
    shape: _OrderByElement
  }
};
