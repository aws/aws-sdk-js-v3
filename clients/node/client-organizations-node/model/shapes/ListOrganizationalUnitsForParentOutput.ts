import { _OrganizationalUnits } from "./_OrganizationalUnits";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListOrganizationalUnitsForParentOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OrganizationalUnits: {
      shape: _OrganizationalUnits
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
