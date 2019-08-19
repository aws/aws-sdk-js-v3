import { _OrganizationalUnit } from "./_OrganizationalUnit";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateOrganizationalUnitOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OrganizationalUnit: {
      shape: _OrganizationalUnit
    }
  }
};
