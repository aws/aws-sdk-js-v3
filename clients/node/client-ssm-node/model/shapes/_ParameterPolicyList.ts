import { List as _List_ } from "@aws-sdk/types";
import { _ParameterInlinePolicy } from "./_ParameterInlinePolicy";

export const _ParameterPolicyList: _List_ = {
  type: "list",
  member: {
    shape: _ParameterInlinePolicy
  }
};
