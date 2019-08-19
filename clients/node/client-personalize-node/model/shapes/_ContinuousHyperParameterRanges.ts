import { List as _List_ } from "@aws-sdk/types";
import { _ContinuousHyperParameterRange } from "./_ContinuousHyperParameterRange";

export const _ContinuousHyperParameterRanges: _List_ = {
  type: "list",
  member: {
    shape: _ContinuousHyperParameterRange
  }
};
