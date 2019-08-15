import { List as _List_ } from "@aws-sdk/types";
import { _TrafficMirrorSession } from "./_TrafficMirrorSession";

export const _TrafficMirrorSessionSet: _List_ = {
  type: "list",
  member: {
    shape: _TrafficMirrorSession,
    locationName: "item"
  }
};
