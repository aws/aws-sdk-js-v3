import { List as _List_ } from "@aws-sdk/types";
import { _TopicsDetectionJobProperties } from "./_TopicsDetectionJobProperties";

export const _TopicsDetectionJobPropertiesList: _List_ = {
  type: "list",
  member: {
    shape: _TopicsDetectionJobProperties
  }
};
