import { List as _List_ } from "@aws-sdk/types";
import { _CategoricalHyperParameterRange } from "./_CategoricalHyperParameterRange";

export const _CategoricalHyperParameterRanges: _List_ = {
  type: "list",
  member: {
    shape: _CategoricalHyperParameterRange
  }
};
