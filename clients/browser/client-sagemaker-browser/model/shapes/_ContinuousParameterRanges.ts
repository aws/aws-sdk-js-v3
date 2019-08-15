import { List as _List_ } from "@aws-sdk/types";
import { _ContinuousParameterRange } from "./_ContinuousParameterRange";

export const _ContinuousParameterRanges: _List_ = {
  type: "list",
  member: {
    shape: _ContinuousParameterRange
  }
};
