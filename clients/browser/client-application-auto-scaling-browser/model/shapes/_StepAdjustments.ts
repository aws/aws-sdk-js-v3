import { List as _List_ } from "@aws-sdk/types";
import { _StepAdjustment } from "./_StepAdjustment";

export const _StepAdjustments: _List_ = {
  type: "list",
  member: {
    shape: _StepAdjustment
  }
};
