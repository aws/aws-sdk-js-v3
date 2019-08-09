import { List as _List_ } from "@aws-sdk/types";
import { _StaleSecurityGroup } from "./_StaleSecurityGroup";

export const _StaleSecurityGroupSet: _List_ = {
  type: "list",
  member: {
    shape: _StaleSecurityGroup,
    locationName: "item"
  }
};
