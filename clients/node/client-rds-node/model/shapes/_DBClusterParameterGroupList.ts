import { List as _List_ } from "@aws-sdk/types";
import { _DBClusterParameterGroup } from "./_DBClusterParameterGroup";

export const _DBClusterParameterGroupList: _List_ = {
  type: "list",
  member: {
    shape: _DBClusterParameterGroup,
    locationName: "DBClusterParameterGroup"
  }
};
