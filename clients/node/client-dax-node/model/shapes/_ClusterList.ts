import { List as _List_ } from "@aws-sdk/types";
import { _Cluster } from "./_Cluster";

export const _ClusterList: _List_ = {
  type: "list",
  member: {
    shape: _Cluster
  }
};
