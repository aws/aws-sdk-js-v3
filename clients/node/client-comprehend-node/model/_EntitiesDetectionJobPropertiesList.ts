import { List as _List_ } from "@aws-sdk/types";
import { _EntitiesDetectionJobProperties } from "./_EntitiesDetectionJobProperties";

export const _EntitiesDetectionJobPropertiesList: _List_ = {
  type: "list",
  member: {
    shape: _EntitiesDetectionJobProperties
  }
};
