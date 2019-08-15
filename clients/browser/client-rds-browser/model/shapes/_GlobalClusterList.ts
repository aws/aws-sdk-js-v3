import { List as _List_ } from "@aws-sdk/types";
import { _GlobalCluster } from "./_GlobalCluster";

export const _GlobalClusterList: _List_ = {
  type: "list",
  member: {
    shape: _GlobalCluster,
    locationName: "GlobalClusterMember"
  }
};
