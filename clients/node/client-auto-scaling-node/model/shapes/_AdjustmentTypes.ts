import { List as _List_ } from "@aws-sdk/types";
import { _AdjustmentType } from "./_AdjustmentType";

export const _AdjustmentTypes: _List_ = {
  type: "list",
  member: {
    shape: _AdjustmentType
  }
};
