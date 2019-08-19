import { List as _List_ } from "@aws-sdk/types";
import { _EC2SecurityGroup } from "./_EC2SecurityGroup";

export const _EC2SecurityGroupList: _List_ = {
  type: "list",
  member: {
    shape: _EC2SecurityGroup,
    locationName: "EC2SecurityGroup"
  }
};
