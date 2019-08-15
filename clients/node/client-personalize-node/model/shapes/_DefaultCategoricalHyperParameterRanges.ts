import { List as _List_ } from "@aws-sdk/types";
import { _DefaultCategoricalHyperParameterRange } from "./_DefaultCategoricalHyperParameterRange";

export const _DefaultCategoricalHyperParameterRanges: _List_ = {
  type: "list",
  member: {
    shape: _DefaultCategoricalHyperParameterRange
  }
};
