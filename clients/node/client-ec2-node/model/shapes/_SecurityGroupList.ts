import { List as _List_ } from "@aws-sdk/types";
import { _SecurityGroup } from "./_SecurityGroup";

export const _SecurityGroupList: _List_ = {
  type: "list",
  member: {
    shape: _SecurityGroup,
    locationName: "item"
  }
};
