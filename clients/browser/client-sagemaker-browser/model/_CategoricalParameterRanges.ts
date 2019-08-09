import { List as _List_ } from "@aws-sdk/types";
import { _CategoricalParameterRange } from "./_CategoricalParameterRange";

export const _CategoricalParameterRanges: _List_ = {
  type: "list",
  member: {
    shape: _CategoricalParameterRange
  }
};
