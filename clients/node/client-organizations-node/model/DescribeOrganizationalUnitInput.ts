import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeOrganizationalUnitInput: _Structure_ = {
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
