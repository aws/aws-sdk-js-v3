import { List as _List_ } from "@aws-sdk/types";
import { _Database } from "./_Database";

export const _DatabaseList: _List_ = {
  type: "list",
  member: {
    shape: _Database
  }
};
