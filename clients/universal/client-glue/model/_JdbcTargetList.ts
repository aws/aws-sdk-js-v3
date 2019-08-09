import { List as _List_ } from "@aws-sdk/types";
import { _JdbcTarget } from "./_JdbcTarget";

export const _JdbcTargetList: _List_ = {
  type: "list",
  member: {
    shape: _JdbcTarget
  }
};
