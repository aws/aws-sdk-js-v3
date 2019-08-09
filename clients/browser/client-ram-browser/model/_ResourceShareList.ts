import { List as _List_ } from "@aws-sdk/types";
import { _ResourceShare } from "./_ResourceShare";

export const _ResourceShareList: _List_ = {
  type: "list",
  member: {
    shape: _ResourceShare
  }
};
