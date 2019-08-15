import { List as _List_ } from "@aws-sdk/types";
import { _UserDefinedFunction } from "./_UserDefinedFunction";

export const _UserDefinedFunctionList: _List_ = {
  type: "list",
  member: {
    shape: _UserDefinedFunction
  }
};
