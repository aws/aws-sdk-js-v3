import { List as _List_ } from "@aws-sdk/types";
import { _ClusterVersion } from "./_ClusterVersion";

export const _ClusterVersionList: _List_ = {
  type: "list",
  member: {
    shape: _ClusterVersion,
    locationName: "ClusterVersion"
  }
};
