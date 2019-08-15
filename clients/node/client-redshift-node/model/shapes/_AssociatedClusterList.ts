import { List as _List_ } from "@aws-sdk/types";
import { _ClusterAssociatedToSchedule } from "./_ClusterAssociatedToSchedule";

export const _AssociatedClusterList: _List_ = {
  type: "list",
  member: {
    shape: _ClusterAssociatedToSchedule,
    locationName: "ClusterAssociatedToSchedule"
  }
};
