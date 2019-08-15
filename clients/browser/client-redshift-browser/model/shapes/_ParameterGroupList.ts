import { List as _List_ } from "@aws-sdk/types";
import { _ClusterParameterGroup } from "./_ClusterParameterGroup";

export const _ParameterGroupList: _List_ = {
  type: "list",
  member: {
    shape: _ClusterParameterGroup,
    locationName: "ClusterParameterGroup"
  }
};
