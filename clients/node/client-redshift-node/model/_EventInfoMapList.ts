import { List as _List_ } from "@aws-sdk/types";
import { _EventInfoMap } from "./_EventInfoMap";

export const _EventInfoMapList: _List_ = {
  type: "list",
  member: {
    shape: _EventInfoMap,
    locationName: "EventInfoMap"
  }
};
