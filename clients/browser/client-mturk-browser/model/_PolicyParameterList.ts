import { List as _List_ } from "@aws-sdk/types";
import { _PolicyParameter } from "./_PolicyParameter";

export const _PolicyParameterList: _List_ = {
  type: "list",
  member: {
    shape: _PolicyParameter
  }
};
