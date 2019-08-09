import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteOrganizationalUnitInput: _Structure_ = {
  type: "structure",
  required: ["OrganizationalUnitId"],
  members: {
    OrganizationalUnitId: {
      shape: {
        type: "string"
      }
    }
  }
};
