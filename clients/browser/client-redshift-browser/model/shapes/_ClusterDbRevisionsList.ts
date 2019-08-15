import { List as _List_ } from "@aws-sdk/types";
import { _ClusterDbRevision } from "./_ClusterDbRevision";

export const _ClusterDbRevisionsList: _List_ = {
  type: "list",
  member: {
    shape: _ClusterDbRevision,
    locationName: "ClusterDbRevision"
  }
};
