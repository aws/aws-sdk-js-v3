import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeOrganizationInput: _Structure_ = {
  type: "structure",
  required: ["OrganizationId"],
  members: {
    OrganizationId: {
      shape: {
        type: "string"
      }
    }
  }
};
