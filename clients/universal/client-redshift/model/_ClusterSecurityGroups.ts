import { List as _List_ } from "@aws-sdk/types";
import { _ClusterSecurityGroup } from "./_ClusterSecurityGroup";

export const _ClusterSecurityGroups: _List_ = {
  type: "list",
  member: {
    shape: _ClusterSecurityGroup,
    locationName: "ClusterSecurityGroup"
  }
};
