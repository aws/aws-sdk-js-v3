import { List as _List_ } from "@aws-sdk/types";
import { _DocumentParameter } from "./_DocumentParameter";

export const _DocumentParameterList: _List_ = {
  type: "list",
  member: {
    shape: _DocumentParameter
  }
};
