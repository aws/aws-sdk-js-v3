import { List as _List_ } from "@aws-sdk/types";
import { _ClusterParameterGroupStatus } from "./_ClusterParameterGroupStatus";

export const _ClusterParameterGroupStatusList: _List_ = {
  type: "list",
  member: {
    shape: _ClusterParameterGroupStatus,
    locationName: "ClusterParameterGroup"
  }
};
