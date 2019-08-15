import { List as _List_ } from "@aws-sdk/types";
import { _DailyVolume } from "./_DailyVolume";

export const _DailyVolumes: _List_ = {
  type: "list",
  member: {
    shape: _DailyVolume
  }
};
