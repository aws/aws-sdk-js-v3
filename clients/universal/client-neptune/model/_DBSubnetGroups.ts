import { List as _List_ } from "@aws-sdk/types";
import { _DBSubnetGroup } from "./_DBSubnetGroup";

export const _DBSubnetGroups: _List_ = {
  type: "list",
  member: {
    shape: _DBSubnetGroup,
    locationName: "DBSubnetGroup"
  }
};
