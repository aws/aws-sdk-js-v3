import { List as _List_ } from "@aws-sdk/types";
import { _DefaultIntegerHyperParameterRange } from "./_DefaultIntegerHyperParameterRange";

export const _DefaultIntegerHyperParameterRanges: _List_ = {
  type: "list",
  member: {
    shape: _DefaultIntegerHyperParameterRange
  }
};
