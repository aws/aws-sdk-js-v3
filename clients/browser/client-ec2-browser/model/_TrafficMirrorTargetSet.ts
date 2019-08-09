import { List as _List_ } from "@aws-sdk/types";
import { _TrafficMirrorTarget } from "./_TrafficMirrorTarget";

export const _TrafficMirrorTargetSet: _List_ = {
  type: "list",
  member: {
    shape: _TrafficMirrorTarget,
    locationName: "item"
  }
};
