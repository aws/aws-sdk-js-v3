import { List as _List_ } from "@aws-sdk/types";
import { _ScalingActivity } from "./_ScalingActivity";

export const _ScalingActivities: _List_ = {
  type: "list",
  member: {
    shape: _ScalingActivity
  }
};
