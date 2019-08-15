import { _OrganizationNodes } from "./_OrganizationNodes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListOrganizationPortfolioAccessOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OrganizationNodes: {
      shape: _OrganizationNodes
    },
    NextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
