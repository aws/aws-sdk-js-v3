import { List as _List_ } from "@aws-sdk/types";
import { _DefaultContinuousHyperParameterRange } from "./_DefaultContinuousHyperParameterRange";

export const _DefaultContinuousHyperParameterRanges: _List_ = {
  type: "list",
  member: {
    shape: _DefaultContinuousHyperParameterRange
  }
};
