import { List as _List_ } from "@aws-sdk/types";
import { _DBSecurityGroup } from "./_DBSecurityGroup";

export const _DBSecurityGroups: _List_ = {
  type: "list",
  member: {
    shape: _DBSecurityGroup,
    locationName: "DBSecurityGroup"
  }
};
