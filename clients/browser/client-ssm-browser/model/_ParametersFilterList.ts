import { List as _List_ } from "@aws-sdk/types";
import { _ParametersFilter } from "./_ParametersFilter";

export const _ParametersFilterList: _List_ = {
  type: "list",
  member: {
    shape: _ParametersFilter
  }
};
