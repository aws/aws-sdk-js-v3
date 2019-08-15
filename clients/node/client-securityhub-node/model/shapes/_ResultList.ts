import { List as _List_ } from "@aws-sdk/types";
import { _Result } from "./_Result";

export const _ResultList: _List_ = {
  type: "list",
  member: {
    shape: _Result
  }
};
