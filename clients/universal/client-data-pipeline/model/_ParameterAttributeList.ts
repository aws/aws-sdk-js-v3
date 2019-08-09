import { List as _List_ } from "@aws-sdk/types";
import { _ParameterAttribute } from "./_ParameterAttribute";

export const _ParameterAttributeList: _List_ = {
  type: "list",
  member: {
    shape: _ParameterAttribute
  }
};
