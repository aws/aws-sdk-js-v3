import { List as _List_ } from "@aws-sdk/types";
import { _DBCluster } from "./_DBCluster";

export const _DBClusterList: _List_ = {
  type: "list",
  member: {
    shape: _DBCluster,
    locationName: "DBCluster"
  }
};
