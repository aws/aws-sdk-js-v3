import { List as _List_ } from "@aws-sdk/types";
import { _DBParameterGroupStatus } from "./_DBParameterGroupStatus";

export const _DBParameterGroupStatusList: _List_ = {
  type: "list",
  member: {
    shape: _DBParameterGroupStatus,
    locationName: "DBParameterGroup"
  }
};
