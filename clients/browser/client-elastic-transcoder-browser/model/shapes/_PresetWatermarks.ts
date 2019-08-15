import { List as _List_ } from "@aws-sdk/types";
import { _PresetWatermark } from "./_PresetWatermark";

export const _PresetWatermarks: _List_ = {
  type: "list",
  member: {
    shape: _PresetWatermark
  }
};
