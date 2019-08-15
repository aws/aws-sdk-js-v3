import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OrganizationConfiguration: _Structure_ = {
  type: "structure",
  required: ["EnableIntegration"],
  members: {
    EnableIntegration: {
      shape: {
        type: "boolean"
      }
    }
  }
};
