import { List as _List_ } from "@aws-sdk/types";
import { _Environment } from "./_Environment";

export const _EnvironmentList: _List_ = {
  type: "list",
  member: {
    shape: _Environment
  }
};
