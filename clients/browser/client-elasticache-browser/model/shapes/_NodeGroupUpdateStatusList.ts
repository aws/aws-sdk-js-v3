import { List as _List_ } from "@aws-sdk/types";
import { _NodeGroupUpdateStatus } from "./_NodeGroupUpdateStatus";

export const _NodeGroupUpdateStatusList: _List_ = {
  type: "list",
  member: {
    shape: _NodeGroupUpdateStatus,
    locationName: "NodeGroupUpdateStatus"
  }
};
