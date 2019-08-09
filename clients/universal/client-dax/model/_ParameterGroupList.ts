import { List as _List_ } from "@aws-sdk/types";
import { _ParameterGroup } from "./_ParameterGroup";

export const _ParameterGroupList: _List_ = {
  type: "list",
  member: {
    shape: _ParameterGroup
  }
};
