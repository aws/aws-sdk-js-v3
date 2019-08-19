import { List as _List_ } from "@aws-sdk/types";
import { _IspPlacement } from "./_IspPlacement";

export const _IspPlacements: _List_ = {
  type: "list",
  member: {
    shape: _IspPlacement
  }
};
