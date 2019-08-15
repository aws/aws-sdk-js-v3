import { List as _List_ } from "@aws-sdk/types";
import { _DetectorDebugOption } from "./_DetectorDebugOption";

export const _DetectorDebugOptions: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _DetectorDebugOption
  }
};
