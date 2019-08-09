import { List as _List_ } from "@aws-sdk/types";
import { _Activation } from "./_Activation";

export const _ActivationList: _List_ = {
  type: "list",
  member: {
    shape: _Activation
  }
};
