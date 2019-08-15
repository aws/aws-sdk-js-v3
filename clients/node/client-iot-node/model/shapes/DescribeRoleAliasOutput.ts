import { _RoleAliasDescription } from "./_RoleAliasDescription";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeRoleAliasOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    roleAliasDescription: {
      shape: _RoleAliasDescription
    }
  }
};
