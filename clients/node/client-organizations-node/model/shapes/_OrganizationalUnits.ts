import { List as _List_ } from "@aws-sdk/types";
import { _OrganizationalUnit } from "./_OrganizationalUnit";

export const _OrganizationalUnits: _List_ = {
  type: "list",
  member: {
    shape: _OrganizationalUnit
  }
};
