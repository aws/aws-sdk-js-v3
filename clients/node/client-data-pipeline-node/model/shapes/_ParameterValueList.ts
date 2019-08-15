import { List as _List_ } from "@aws-sdk/types";
import { _ParameterValue } from "./_ParameterValue";

export const _ParameterValueList: _List_ = {
  type: "list",
  member: {
    shape: _ParameterValue
  }
};
