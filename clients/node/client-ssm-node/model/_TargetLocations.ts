import { List as _List_ } from "@aws-sdk/types";
import { _TargetLocation } from "./_TargetLocation";

export const _TargetLocations: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _TargetLocation
  }
};
