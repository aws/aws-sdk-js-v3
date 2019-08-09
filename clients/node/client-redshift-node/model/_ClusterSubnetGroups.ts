import { List as _List_ } from "@aws-sdk/types";
import { _ClusterSubnetGroup } from "./_ClusterSubnetGroup";

export const _ClusterSubnetGroups: _List_ = {
  type: "list",
  member: {
    shape: _ClusterSubnetGroup,
    locationName: "ClusterSubnetGroup"
  }
};
