import { List as _List_ } from "@aws-sdk/types";
import { _IntegerParameterRange } from "./_IntegerParameterRange";

export const _IntegerParameterRanges: _List_ = {
  type: "list",
  member: {
    shape: _IntegerParameterRange
  }
};
