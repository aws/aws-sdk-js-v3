import { List as _List_ } from "@aws-sdk/types";
import { _JobWatermark } from "./_JobWatermark";

export const _JobWatermarks: _List_ = {
  type: "list",
  member: {
    shape: _JobWatermark
  }
};
