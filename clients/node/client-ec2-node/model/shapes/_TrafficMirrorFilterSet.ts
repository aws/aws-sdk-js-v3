import { List as _List_ } from "@aws-sdk/types";
import { _TrafficMirrorFilter } from "./_TrafficMirrorFilter";

export const _TrafficMirrorFilterSet: _List_ = {
  type: "list",
  member: {
    shape: _TrafficMirrorFilter,
    locationName: "item"
  }
};
