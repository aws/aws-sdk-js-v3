import { List as _List_ } from "@aws-sdk/types";
import { _DBParameterGroup } from "./_DBParameterGroup";

export const _DBParameterGroupList: _List_ = {
  type: "list",
  member: {
    shape: _DBParameterGroup,
    locationName: "DBParameterGroup"
  }
};
