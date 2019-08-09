import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateOrganizationalUnitInput: _Structure_ = {
  type: "structure",
  required: ["OrganizationalUnitId"],
  members: {
    OrganizationalUnitId: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
