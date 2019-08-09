import { List as _List_ } from "@aws-sdk/types";
import { _IntegerHyperParameterRange } from "./_IntegerHyperParameterRange";

export const _IntegerHyperParameterRanges: _List_ = {
  type: "list",
  member: {
    shape: _IntegerHyperParameterRange
  }
};
