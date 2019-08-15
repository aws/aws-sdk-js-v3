import { List as _List_ } from "@aws-sdk/types";
import { _NodeGroupMemberUpdateStatus } from "./_NodeGroupMemberUpdateStatus";

export const _NodeGroupMemberUpdateStatusList: _List_ = {
  type: "list",
  member: {
    shape: _NodeGroupMemberUpdateStatus,
    locationName: "NodeGroupMemberUpdateStatus"
  }
};
