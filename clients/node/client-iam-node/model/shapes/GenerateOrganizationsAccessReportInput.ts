import { Structure as _Structure_ } from "@aws-sdk/types";

export const GenerateOrganizationsAccessReportInput: _Structure_ = {
  type: "structure",
  required: ["EntityPath"],
  members: {
    EntityPath: {
      shape: {
        type: "string",
        min: 19
      }
    },
    OrganizationsPolicyId: {
      shape: {
        type: "string"
      }
    }
  }
};
