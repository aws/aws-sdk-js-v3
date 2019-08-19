import { List as _List_ } from "@aws-sdk/types";
import { _ServiceLastAccessed } from "./_ServiceLastAccessed";

export const _ServicesLastAccessed: _List_ = {
  type: "list",
  member: {
    shape: _ServiceLastAccessed
  }
};
