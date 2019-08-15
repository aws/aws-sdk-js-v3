import { List as _List_ } from "@aws-sdk/types";
import { _ExecutionParameter } from "./_ExecutionParameter";

export const _ExecutionParameters: _List_ = {
  type: "list",
  member: {
    shape: _ExecutionParameter
  }
};
