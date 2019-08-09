import { _OrganizationSummaries } from "./_OrganizationSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListOrganizationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OrganizationSummaries: {
      shape: _OrganizationSummaries
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
