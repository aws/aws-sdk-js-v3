import { List as _List_ } from "@aws-sdk/types";
import { _ParameterNameValue } from "./_ParameterNameValue";

export const _ParameterNameValueList: _List_ = {
  type: "list",
  member: {
    shape: _ParameterNameValue
  }
};
