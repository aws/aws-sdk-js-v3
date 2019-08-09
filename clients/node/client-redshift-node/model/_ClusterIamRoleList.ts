import { List as _List_ } from "@aws-sdk/types";
import { _ClusterIamRole } from "./_ClusterIamRole";

export const _ClusterIamRoleList: _List_ = {
  type: "list",
  member: {
    shape: _ClusterIamRole,
    locationName: "ClusterIamRole"
  }
};
