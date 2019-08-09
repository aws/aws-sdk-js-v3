import { _StatusDetailFilters } from "./_StatusDetailFilters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetOrganizationConfigRuleDetailedStatusInput: _Structure_ = {
  type: "structure",
  required: ["OrganizationConfigRuleName"],
  members: {
    OrganizationConfigRuleName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Filters: {
      shape: _StatusDetailFilters
    },
    Limit: {
      shape: {
        type: "integer"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
